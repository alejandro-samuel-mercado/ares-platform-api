"use strict";
/**
 * Middleware: SubscriptionMiddleware
 *
 * Valida en cada request autenticado que el vendedor tiene una suscripción
 * vigente (fecha_vencimiento > fecha_actual). Si el plan está vencido,
 * retorna HTTP 403 con un payload que incluye la URL del QR de pago
 * configurado por el administrador.
 *
 * Casos contemplados:
 * - Plan vencido → 403 + redirect a pantalla renovación con QR
 * - Plan suspendido manualmente → 403 + mensaje de contacto admin
 * - Superadmin → siempre pasa (no tiene restricción)
 * - Plan activo → adjunta info y continúa
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionMiddleware = subscriptionMiddleware;
const prisma_1 = __importDefault(require("../lib/prisma"));
async function subscriptionMiddleware(req, res, next) {
    try {
        const vendor = req.vendor;
        if (!vendor) {
            res.status(401).json({ error: 'No autenticado' });
            return;
        }
        // Superadmin siempre pasa
        if (vendor.role === 'SUPERADMIN') {
            next();
            return;
        }
        // Vendor suspendido manualmente
        if (vendor.status === 'SUSPENDED') {
            res.status(403).json({
                error: 'Cuenta suspendida',
                reason: 'suspended',
                message: 'Tu cuenta ha sido suspendida. Contacta al administrador.',
            });
            return;
        }
        // Verificar fecha de vencimiento
        if (new Date(vendor.fecha_vencimiento) < new Date()) {
            // Obtener QR de cobro del admin
            const ajustes = await prisma_1.default.ajustesPlataforma.findUnique({
                where: { id: '1' },
            });
            res.status(403).json({
                error: 'Suscripción vencida',
                reason: 'expired',
                qr_url: ajustes?.qr_cobro_url || '',
                tigo_money: ajustes?.tigo_money_numero || '',
                message: 'Tu plan ha vencido. Renueva para continuar usando la plataforma.',
            });
            return;
        }
        next();
    }
    catch (error) {
        res.status(500).json({ error: 'Error verificando suscripción' });
    }
}
exports.default = subscriptionMiddleware;
//# sourceMappingURL=subscription.js.map