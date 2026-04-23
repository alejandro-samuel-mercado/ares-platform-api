"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.planGuard = planGuard;
const planHierarchy = {
    'Gratis': 0,
    'Vendedor': 1,
    'Pro': 2,
    'Proveedor': 3,
};
function planGuard(requiredPlan) {
    return (req, res, next) => {
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
        const vendorLevel = planHierarchy[vendor.plan.nombre] ?? 0;
        const requiredLevel = planHierarchy[requiredPlan] ?? 0;
        if (vendorLevel < requiredLevel) {
            res.status(403).json({
                error: 'Plan insuficiente',
                reason: 'plan_required',
                required_plan: requiredPlan,
                current_plan: vendor.plan.nombre,
                message: `Esta función requiere plan ${requiredPlan} o superior.`,
            });
            return;
        }
        next();
    };
}
exports.default = planGuard;
//# sourceMappingURL=planGuard.js.map