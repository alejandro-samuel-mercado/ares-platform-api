/**
 * Middleware: PlanGuard
 *
 * Restringe el acceso a ciertos endpoints según el plan del vendor.
 * Se usa como middleware de ruta para features exclusivas de ciertos planes.
 *
 * Ejemplo de uso:
 * router.post('/pedidos', planGuard('pro'), crearPedido);
 *
 * @param requiredPlan - Plan mínimo requerido: 'vendedor' | 'pro' | 'proveedor'
 */
import { Request, Response, NextFunction } from 'express';
export declare function planGuard(requiredPlan: string): (req: Request, res: Response, next: NextFunction) => void;
export default planGuard;
//# sourceMappingURL=planGuard.d.ts.map