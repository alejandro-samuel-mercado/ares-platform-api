"use strict";
/**
 * Middleware: RoleGuard
 *
 * Restringe endpoints exclusivos para superadmin.
 * Se usa para todas las rutas del panel de administración.
 *
 * @param role - Rol requerido: 'SUPERADMIN'
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleGuard = roleGuard;
function roleGuard(role) {
    return (req, res, next) => {
        const vendor = req.vendor;
        if (!vendor) {
            res.status(401).json({ error: 'No autenticado' });
            return;
        }
        if (vendor.role !== role) {
            res.status(403).json({
                error: 'Acceso denegado',
                reason: 'role_required',
                message: 'No tienes permisos para acceder a este recurso.',
            });
            return;
        }
        next();
    };
}
exports.default = roleGuard;
//# sourceMappingURL=roleGuard.js.map