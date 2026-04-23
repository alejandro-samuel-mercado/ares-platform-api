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
import { Request, Response, NextFunction } from 'express';
export declare function subscriptionMiddleware(req: Request, res: Response, next: NextFunction): Promise<void>;
export default subscriptionMiddleware;
//# sourceMappingURL=subscription.d.ts.map