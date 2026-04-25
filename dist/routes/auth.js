"use strict";
/**
 * Rutas: Autenticación
 *
 * Maneja registro, login y refresh de tokens JWT.
 *
 * POST /api/auth/register — Crea nuevo vendedor con 7 días gratis
 * POST /api/auth/login    — Login por teléfono+contraseña, retorna JWT
 * POST /api/auth/refresh  — Renueva token con refresh token
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const router = (0, express_1.Router)();
const JWT_SECRET = process.env.JWT_SECRET || 'ares-dev-secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
/**
 * POST /api/auth/register
 *
 * Registra un nuevo vendedor con plan Gratis (7 días).
 * Campos requeridos: nombre, alias, telefono, password
 */
router.post('/register', async (req, res) => {
    try {
        const { nombre, alias, telefono, password } = req.body;
        // Validación básica
        if (!nombre || !alias || !telefono || !password) {
            res.status(400).json({ error: 'Todos los campos son requeridos: nombre, alias, telefono, password' });
            return;
        }
        // Verificar duplicados
        const existing = await prisma_1.default.vendor.findFirst({
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
        const planGratis = await prisma_1.default.plan.findFirst({
            where: { nombre: 'Gratis' },
        });
        if (!planGratis) {
            res.status(500).json({ error: 'Plan Gratis no configurado en el sistema' });
            return;
        }
        // Crear vendor con 7 días gratis
        const password_hash = await bcryptjs_1.default.hash(password, 12);
        const fecha_vencimiento = new Date();
        fecha_vencimiento.setDate(fecha_vencimiento.getDate() + 7);
        const vendor = await prisma_1.default.vendor.create({
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
        const token = jsonwebtoken_1.default.sign({ vendorId: vendor.id, role: vendor.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
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
    }
    catch (error) {
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
router.post('/login', async (req, res) => {
    try {
        const { alias, password } = req.body;
        if (!alias || !password) {
            res.status(400).json({ error: 'Alias de usuario y contraseña son requeridos' });
            return;
        }
        const vendor = await prisma_1.default.vendor.findUnique({
            where: { alias: alias.toLowerCase() },
            include: { plan: true },
        });
        if (!vendor) {
            res.status(401).json({ error: 'Credenciales inválidas' });
            return;
        }
        const validPassword = await bcryptjs_1.default.compare(password, vendor.password_hash);
        if (!validPassword) {
            res.status(401).json({ error: 'Credenciales inválidas' });
            return;
        }
        // Generar JWT
        const token = jsonwebtoken_1.default.sign({ vendorId: vendor.id, role: vendor.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
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
    }
    catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
/**
 * POST /api/auth/refresh
 *
 * Renueva token JWT usando el token actual (aún válido).
 */
router.post('/refresh', async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            res.status(401).json({ error: 'Token requerido' });
            return;
        }
        const token = authHeader.split(' ')[1];
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        const vendor = await prisma_1.default.vendor.findUnique({
            where: { id: decoded.vendorId },
            include: { plan: true },
        });
        if (!vendor) {
            res.status(401).json({ error: 'Vendor no encontrado' });
            return;
        }
        const newToken = jsonwebtoken_1.default.sign({ vendorId: vendor.id, role: vendor.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        res.json({ token: newToken });
    }
    catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
});
exports.default = router;
//# sourceMappingURL=auth.js.map