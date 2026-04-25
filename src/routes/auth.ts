/**
 * Rutas: Autenticación
 *
 * Maneja registro, login y refresh de tokens JWT.
 * 
 * POST /api/auth/register — Crea nuevo vendedor con 7 días gratis
 * POST /api/auth/login    — Login por teléfono+contraseña, retorna JWT
 * POST /api/auth/refresh  — Renueva token con refresh token
 */

import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'ares-dev-secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

/**
 * POST /api/auth/register
 * 
 * Registra un nuevo vendedor con plan Gratis (7 días).
 * Campos requeridos: nombre, alias, telefono, password
 */
router.post('/register', async (req: Request, res: Response): Promise<void> => {
  try {
    const { nombre, alias, telefono, password } = req.body;

    // Validación básica
    if (!nombre || !alias || !telefono || !password) {
      res.status(400).json({ error: 'Todos los campos son requeridos: nombre, alias, telefono, password' });
      return;
    }

    // Verificar duplicados
    const existing = await prisma.vendor.findFirst({
      where: {
        OR: [
          { alias: alias.toLowerCase() },
          { telefono },
        ],
      },
    });

    if (existing) {
      const field = existing.alias === alias.toLowerCase() ? 'alias' : 'teléfono';
      res.status(409).json({ error: `Ya existe un vendedor con ese ${field}` });
      return;
    }

    // Buscar plan gratis
    const planGratis = await prisma.plan.findFirst({
      where: { nombre: 'Gratis' },
    });

    if (!planGratis) {
      res.status(500).json({ error: 'Plan Gratis no configurado en el sistema' });
      return;
    }

    // Crear vendor con 7 días gratis
    const password_hash = await bcrypt.hash(password, 12);
    const fecha_vencimiento = new Date();
    fecha_vencimiento.setDate(fecha_vencimiento.getDate() + 7);

    const vendor = await prisma.vendor.create({
      data: {
        nombre,
        alias: alias.toLowerCase(),
        telefono,
        password_hash,
        plan_id: planGratis.id,
        fecha_vencimiento,
        status: 'GUEST',
        role: 'GUEST',
      },
      include: { plan: true },
    });

    // Generar JWT
    const token = jwt.sign(
      { vendorId: vendor.id, role: vendor.role },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN as any }
    );

    res.status(201).json({
      message: '¡Registro exitoso! Tienes 7 días gratis.',
      token,
      vendor: {
        id: vendor.id,
        nombre: vendor.nombre,
        alias: vendor.alias,
        telefono: vendor.telefono,
        plan: vendor.plan.nombre,
        texto_limite: vendor.plan.texto_limite,
        role: vendor.role,
        fecha_vencimiento: vendor.fecha_vencimiento,
      },
    });
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

/**
 * POST /api/auth/login
 * 
 * Login por alias + contraseña.
 * Retorna JWT y datos del vendor con su plan.
 */
router.post('/login', async (req: Request, res: Response): Promise<void> => {
  try {
    const { alias, password } = req.body;

    if (!alias || !password) {
      res.status(400).json({ error: 'Alias de usuario y contraseña son requeridos' });
      return;
    }

    const vendor = await prisma.vendor.findUnique({
      where: { alias: alias.toLowerCase() },
      include: { plan: true },
    });

    if (!vendor) {
      res.status(401).json({ error: 'Credenciales inválidas' });
      return;
    }

    const validPassword = await bcrypt.compare(password, vendor.password_hash);
    if (!validPassword) {
      res.status(401).json({ error: 'Credenciales inválidas' });
      return;
    }

    // Generar JWT
    const token = jwt.sign(
      { vendorId: vendor.id, role: vendor.role },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN as any }
    );

    res.json({
      token,
      vendor: {
        id: vendor.id,
        nombre: vendor.nombre,
        alias: vendor.alias,
        telefono: vendor.telefono,
        whatsapp: vendor.whatsapp,
        logo_url: vendor.logo_url,
        plan: vendor.plan.nombre,
        texto_limite: vendor.plan.texto_limite,
        plan_id: vendor.plan_id,
        role: vendor.role,
        es_colaborador: vendor.es_colaborador,
        status: vendor.status,
        fecha_vencimiento: vendor.fecha_vencimiento,
      },
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

/**
 * POST /api/auth/refresh
 * 
 * Renueva token JWT usando el token actual (aún válido).
 */
router.post('/refresh', async (req: Request, res: Response): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Token requerido' });
      return;
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET) as { vendorId: string; role: string };

    const vendor = await prisma.vendor.findUnique({
      where: { id: decoded.vendorId },
      include: { plan: true },
    });

    if (!vendor) {
      res.status(401).json({ error: 'Vendor no encontrado' });
      return;
    }

    const newToken = jwt.sign(
      { vendorId: vendor.id, role: vendor.role },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN as any }
    );

    res.json({ token: newToken });
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
});

export default router;
