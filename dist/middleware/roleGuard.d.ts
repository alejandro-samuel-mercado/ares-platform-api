/**
 * Middleware: RoleGuard
 *
 * Restringe endpoints exclusivos para superadmin.
 * Se usa para todas las rutas del panel de administración.
 *
 * @param role - Rol requerido: 'SUPERADMIN'
 */
import { Request, Response, NextFunction } from 'express';
export declare function roleGuard(role: string): (req: Request, res: Response, next: NextFunction) => void;
export default roleGuard;
//# sourceMappingURL=roleGuard.d.ts.map