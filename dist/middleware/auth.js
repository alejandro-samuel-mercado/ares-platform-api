"use strict";
/**
 * Middleware: AuthMiddleware
 *
 * Valida el JWT en el header Authorization (Bearer token).
 * Busca al vendor en la BD con su plan asociado y lo adjunta a req.vendor.
 *
 * Casos:
 * - Sin token → 401 Unauthorized
 * - Token inválido/expirado → 401 Unauthorized
 * - Vendor no encontrado → 401 Unauthorized
 * - OK → adjunta vendor+plan al request y continúa
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const JWT_SECRET = process.env.JWT_SECRET || 'ares-dev-secret';
async function authMiddleware(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({ error: 'Token de autenticación requerido' });
            return;
        }
        const token = authHeader.split(' ')[1];
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        const vendor = await prisma_1.default.vendor.findUnique({
            where: { id: decoded.vendorId },
            include: { plan: true },
        });
        if (!vendor) {
            res.status(401).json({ error: 'Vendor no encontrado' });
            return;
        }
        // Validación de Suscripción Vencida (Excepto para ADMIN/SUPERADMIN)
        const now = new Date();
        const vencimiento = new Date(vendor.fecha_vencimiento);
        if (vencimiento < now && vendor.role !== 'ADMIN' && vendor.role !== 'SUPERADMIN') {
            res.status(403).json({
                error: 'Suscripción vencida',
                reason: 'expired',
                vencimiento: vendor.fecha_vencimiento
            });
            return;
        }
        req.vendor = vendor;
        next();
    }
    catch (error) {
        res.status(401).json({ error: 'Token inválido o expirado' });
    }
}
exports.default = authMiddleware;
//# sourceMappingURL=auth.js.map