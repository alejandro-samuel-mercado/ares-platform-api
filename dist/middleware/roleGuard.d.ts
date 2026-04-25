/**
 * Middleware: RoleGuard
 *
 * Restringe endpoints exclusivos para superadmin y colaboradores.
 * Se usa para todas las rutas del panel de administración.
 *
 * - SUPERADMIN: acceso total
 * - es_colaborador: acceso limitado (filtrado por colaboradorGuard)
 */
import { Request, Response, NextFunction } from 'express';
export declare function roleGuard(role: string): (req: Request, res: Response, next: NextFunction) => void;
export default roleGuard;
//# sourceMappingURL=roleGuard.d.ts.map