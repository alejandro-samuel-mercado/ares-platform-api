/**
 * Módulo: Express Type Extensions
 *
 * Extiende el tipo Request de Express para incluir el vendor
 * autenticado, que es adjuntado por el middleware de auth.
 */

import { Vendor, Plan } from '@prisma/client';

declare global {
  namespace Express {
    interface Request {
      vendor?: Vendor & { plan: Plan };
    }
  }
}
