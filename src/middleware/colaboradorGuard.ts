/**
 * Middleware: ColaboradorGuard
 *
 * Restringe qué endpoints del admin puede acceder un colaborador.
 * - Permitidos (full CRUD): imagenes, estrenos, partidos, mensajes
 * - Permitidos (solo lectura): vendedores, dashboard
 * - Bloqueados: planes, servicios, credenciales, pagos, pedidos, ajustes, marketplace, backups
 *
 * SUPERADMIN pasa sin restricción.
 */

import { Request, Response, NextFunction } from 'express';

// Modules where colaborador has FULL access (CRUD)
const COLLAB_FULL_ACCESS = ['/imagenes', '/estrenos', '/partidos', '/mensajes'];

// Modules where colaborador has READ-ONLY access
const COLLAB_READONLY = ['/vendedores', '/dashboard'];

export function colaboradorGuard(req: Request, res: Response, next: NextFunction): void {
  const vendor = req.vendor;

  // SUPERADMIN always passes
  if (!vendor || vendor.role === 'SUPERADMIN') {
    next();
    return;
  }

  // Only applies to colaboradores
  if (!vendor.es_colaborador) {
    res.status(403).json({ error: 'Acceso denegado' });
    return;
  }

  const path = req.path; // e.g. /vendedores, /imagenes/123, /dashboard

  // Check full-access modules
  for (const mod of COLLAB_FULL_ACCESS) {
    if (path === mod || path.startsWith(mod + '/')) {
      next();
      return;
    }
  }

  // Check read-only modules (GET only)
  for (const mod of COLLAB_READONLY) {
    if (path === mod || path.startsWith(mod + '/')) {
      if (req.method === 'GET') {
        next();
        return;
      }
      // Special case: allow PATCH for colaborador toggle (superadmin only anyway)
      res.status(403).json({
        error: 'Acceso denegado',
        reason: 'colaborador_readonly',
        message: 'Los colaboradores no pueden modificar este módulo.',
      });
      return;
    }
  }

  // Everything else is blocked for colaboradores
  res.status(403).json({
    error: 'Acceso denegado',
    reason: 'colaborador_restricted',
    message: 'Tu cuenta de colaborador no tiene acceso a este módulo.',
  });
}

export default colaboradorGuard;
