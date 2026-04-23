/**
 * Middleware: RoleGuard
 *
 * Restringe endpoints exclusivos para superadmin.
 * Se usa para todas las rutas del panel de administración.
 *
 * @param role - Rol requerido: 'SUPERADMIN'
 */

import { Request, Response, NextFunction } from 'express';

export function roleGuard(role: string) {
  return (req: Request, res: Response, next: NextFunction): void => {
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

export default roleGuard;
