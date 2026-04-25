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

export function roleGuard(role: string) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const vendor = req.vendor;

    if (!vendor) {
      res.status(401).json({ error: 'No autenticado' });
      return;
    }

    // Allow SUPERADMIN always
    if (vendor.role === role) {
      next();
      return;
    }

    // Allow colaboradores into admin panel (restricted by colaboradorGuard)
    if (role === 'SUPERADMIN' && vendor.es_colaborador === true) {
      next();
      return;
    }

    res.status(403).json({
      error: 'Acceso denegado',
      reason: 'role_required',
      message: 'No tienes permisos para acceder a este recurso.',
    });
  };
}

export default roleGuard;
