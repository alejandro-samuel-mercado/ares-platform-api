/**
 * Middleware: AuthMiddleware
 *
 * Valida el JWT en el header Authorization (Bearer token).
 * Busca al vendor en la BD con su plan asociado y lo adjunta a req.vendor.
 *
 * Casos:
 * - Sin token → 401 Unauthorized
 * - Token inválido/expirado → 401 Unauthorized
 * - Vendor no encontrado → 401 Unauthorized
 * - OK → adjunta vendor+plan al request y continúa
 */

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'ares-dev-secret';

interface JwtPayload {
  vendorId: string;
  role: string;
}

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Token de autenticación requerido' });
      return;
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

    const vendor = await prisma.vendor.findUnique({
      where: { id: decoded.vendorId },
      include: { plan: true },
    });

    if (!vendor) {
      res.status(401).json({ error: 'Vendor no encontrado' });
      return;
    }

    // Validación de Suscripción Vencida (Excepto para ADMIN/SUPERADMIN)
    const now = new Date();
    const vencimiento = new Date(vendor.fecha_vencimiento);
    
    if (vencimiento < now && vendor.role !== 'ADMIN' && vendor.role !== 'SUPERADMIN') {
      res.status(403).json({ 
        error: 'Suscripción vencida', 
        reason: 'expired',
        vencimiento: vendor.fecha_vencimiento 
      });
      return;
    }

    req.vendor = vendor;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido o expirado' });
  }
}

export default authMiddleware;
