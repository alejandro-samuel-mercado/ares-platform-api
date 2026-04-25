"use strict";
/**
 * Servidor Principal — Plataforma Ares
 *
 * Express.js API REST con:
 * - Autenticación JWT
 * - Middleware de suscripción (bloqueo por vencimiento)
 * - Aislamiento multi-tenant por vendor_id
 * - Guards de plan y rol
 *
 * Las rutas se organizan en 3 grupos:
 * 1. /api/auth/* — Públicas (login, registro)
 * 2. /api/* — Requieren auth + suscripción activa
 * 3. /api/admin/* — Requieren auth + rol SUPERADMIN
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const auth_1 = __importDefault(require("./routes/auth"));
const vendor_1 = __importDefault(require("./routes/vendor"));
const admin_1 = __importDefault(require("./routes/admin"));
const webhooks_1 = __importDefault(require("./routes/webhooks"));
const backup_1 = __importDefault(require("./routes/backup"));
const marketplace_1 = __importDefault(require("./routes/marketplace"));
const auth_2 = require("./middleware/auth");
const subscription_1 = require("./middleware/subscription");
const roleGuard_1 = require("./middleware/roleGuard");
const colaboradorGuard_1 = require("./middleware/colaboradorGuard");
const cloudinary_1 = require("./lib/cloudinary");
const prisma_1 = __importDefault(require("./lib/prisma"));
const onesignal_1 = require("./lib/onesignal");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
// ─── Middleware Global ────────────────────────────────────────
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
}));
app.use(express_1.default.json({ limit: '10mb' }));
// Static assets (for local upload fallback)
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '../../uploads')));
app.use(express_1.default.urlencoded({ extended: true }));
// ─── Health Check ─────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'ok',
        platform: 'Ares',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
    });
});
// ─── Rutas Públicas (sin auth) ────────────────────────────────
app.use('/api/auth', auth_1.default);
app.use('/api/webhooks', webhooks_1.default);
// Ajustes públicos (para pantalla de renovación sin auth)
app.get('/api/ajustes-publicos', async (_req, res) => {
    try {
        const { PrismaClient } = await Promise.resolve().then(() => __importStar(require('@prisma/client')));
        const prisma = new PrismaClient();
        const ajustes = await prisma.ajustesPlataforma.findUnique({ where: { id: '1' } });
        await prisma.$disconnect();
        res.json({
            qr_cobro_url: ajustes?.qr_cobro_url || '',
            tigo_money_numero: ajustes?.tigo_money_numero || '',
            nombre_plataforma: ajustes?.nombre_plataforma || 'Ares',
            logo_url: ajustes?.logo_url || '',
            noticia_global: ajustes?.noticia_global || 'Bienvenido a Ares v2.',
            whatsapp_soporte: ajustes?.whatsapp_soporte || '',
        });
    }
    catch {
        res.status(500).json({ error: 'Error obteniendo ajustes' });
    }
});
// ─── Rutas Admin (auth + suscripción + rol SUPERADMIN) ────────
app.use('/api/admin/backups', auth_2.authMiddleware, (0, roleGuard_1.roleGuard)('SUPERADMIN'), backup_1.default);
app.use('/api/admin', auth_2.authMiddleware, (0, roleGuard_1.roleGuard)('SUPERADMIN'), colaboradorGuard_1.colaboradorGuard, admin_1.default);
// ─── Rutas Vendor (auth + suscripción) ────────────────────────
// Nota: /api/pagos/comprobante se exime del subscriptionMiddleware
app.post('/api/pagos/comprobante', auth_2.authMiddleware, cloudinary_1.upload.single('comprobante'), async (req, res) => {
    try {
        const vendor = req.vendor;
        const { monto, plan_id, comprobante_url } = req.body;
        const file = req.file;
        if (!monto || !plan_id) {
            res.status(400).json({ error: 'monto y plan_id son requeridos' });
            return;
        }
        if (!file && !comprobante_url) {
            res.status(400).json({ error: 'Comprobante requerido' });
            return;
        }
        const final_comprobante_url = file ? (0, cloudinary_1.getFileUrl)(file) : comprobante_url;
        console.log('--- INTENTO DE CARGA DE COMPROBANTE ---');
        console.log('Vendor:', vendor.id, '@' + vendor.alias);
        console.log('Payload:', { monto, plan_id, final_comprobante_url });
        const pago = await prisma_1.default.pago.create({
            data: {
                vendor_id: vendor.id,
                monto: parseFloat(monto),
                plan_id,
                status: 'PENDIENTE',
                comprobante_url: final_comprobante_url,
            },
        });
        console.log('Pago registrado exitosamente:', pago.id);
        // Notificar al admin sobre nuevo pago
        try {
            await onesignal_1.OneSignal.sendNotification({
                headings: { es: '💰 Nuevo Pago Recibido', en: '💰 New Payment Received' },
                contents: {
                    es: `El vendedor @${vendor.alias} ha subido un comprobante de $${monto}.`,
                    en: `Vendor @${vendor.alias} uploaded a receipt for $${monto}.`
                },
                filters: [{ field: 'tag', key: 'role', relation: '=', value: 'SUPERADMIN' }]
            });
        }
        catch (err) {
            console.error('OneSignal Error:', err);
        }
        res.status(201).json(pago);
    }
    catch (error) {
        console.error('❌ ERROR FATAL SUBIENDO COMPROBANTE:', error);
        res.status(500).json({
            error: 'Error subiendo comprobante',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
app.use('/api', auth_2.authMiddleware, subscription_1.subscriptionMiddleware, vendor_1.default);
app.use('/api/marketplace', auth_2.authMiddleware, subscription_1.subscriptionMiddleware, marketplace_1.default);
// ─── Error Handler Global ─────────────────────────────────────
app.use((err, _req, res, _next) => {
    console.error('🔥 Error no manejado:', err);
    res.status(500).json({
        error: 'Error interno del servidor',
        ...(process.env.NODE_ENV === 'development' && { details: err.message }),
    });
});
// ─── Iniciar Servidor ─────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`
  ╔═══════════════════════════════════════════╗
  ║         🔱 ARES API SERVER 🔱            ║
  ║─────────────────────────────────────────  ║
  ║  Puerto:  ${PORT}                            ║
  ║  Entorno: ${process.env.NODE_ENV || 'development'}                  ║
  ║  Health:  http://localhost:${PORT}/api/health ║
  ╚═══════════════════════════════════════════╝
  `);
});
exports.default = app;
//# sourceMappingURL=index.js.map