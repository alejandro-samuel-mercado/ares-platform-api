"use strict";
/**
 * Webhooks — Integración de Pasarelas de Pago
 * (Ejemplo: Pagofacil.bo)
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("../generated/client");
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
/**
 * POST /api/webhooks/pagofacil
 * Recibe notificaciones de pago confirmadas desde Pagofacil.bo
 */
router.post('/pagofacil', async (req, res) => {
    try {
        const { TransaccionId, Estado, // Generalmente 1 para éxito
        Monto, PedidoId // Usaremos este campo para guardar el ID del Pago local (cuid)
         } = req.body;
        console.log('🔔 Webhook Pagofacil recibido:', req.body);
        // 1. Validar estado
        if (Estado !== 1 && Estado !== "1") {
            return res.status(200).send('Estado no es éxito, ignorando.');
        }
        // 2. Buscar el pago en nuestra DB
        const pago = await prisma.pago.findUnique({
            where: { id: PedidoId },
            include: { plan: true, vendor: true }
        });
        if (!pago || pago.status !== 'PENDIENTE') {
            return res.status(200).send('Pago no encontrado o ya procesado.');
        }
        // 3. Confirmar pago y extender suscripción
        const baseDate = new Date(pago.vendor.fecha_vencimiento) < new Date()
            ? new Date()
            : new Date(pago.vendor.fecha_vencimiento);
        baseDate.setDate(baseDate.getDate() + pago.plan.dias);
        await prisma.$transaction([
            prisma.pago.update({
                where: { id: PedidoId },
                data: {
                    status: 'CONFIRMADO',
                    confirmado_en: new Date(),
                    notas_admin: `Confirmado vía Webhook Pagofacil (TX: ${TransaccionId})`
                },
            }),
            prisma.vendor.update({
                where: { id: pago.vendor_id },
                data: {
                    fecha_vencimiento: baseDate,
                    status: 'ACTIVE',
                },
            }),
        ]);
        console.log(`✅ Pago ${PedidoId} confirmado automáticamente vía Webhook.`);
        res.status(200).send('OK');
    }
    catch (error) {
        console.error('🔥 Error en Webhook Pagofacil:', error);
        res.status(500).send('Error interno');
    }
});
exports.default = router;
//# sourceMappingURL=webhooks.js.map