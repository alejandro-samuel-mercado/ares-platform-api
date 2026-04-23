"use strict";
/**
 * Rutas: Admin (Panel Admin Web)
 *
 * Endpoints exclusivos para el superadmin:
 * - Dashboard con métricas
 * - CRUD de vendedores (suspender, extender, cambiar plan)
 * - CRUD de planes
 * - CRUD de servicios base
 * - Gestión de pagos (confirmar/rechazar)
 * - Ajustes globales de la plataforma
 * - Gestión de imágenes (upload con etiquetas)
 * - CRUD de partidos
 *
 * Todas las rutas requieren rol SUPERADMIN.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = __importDefault(require("../lib/prisma"));
const cloudinary_1 = require("../lib/cloudinary");
const onesignal_1 = require("../lib/onesignal");
const fs_1 = __importDefault(require("fs"));
const router = (0, express_1.Router)();
const LOG_FILE = '/tmp/ares_debug_admin.log';
// Logger para depurar problemas de persistencia
router.use((req, _res, next) => {
    const logMsg = `[${new Date().toISOString()}] ${req.method} ${req.path} - Type: ${req.headers['content-type']}\n`;
    fs_1.default.appendFileSync(LOG_FILE, logMsg);
    next();
});
// ═══════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════
/**
 * GET /api/admin/dashboard
 * Métricas principales del panel de administración.
 */
router.get('/dashboard', async (_req, res) => {
    try {
        const now = new Date();
        const threeDaysFromNow = new Date();
        threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);
        // MRR: suma de precios de planes de vendors activos
        const activeVendors = await prisma_1.default.vendor.findMany({
            where: {
                status: 'ACTIVE',
                fecha_vencimiento: { gt: now },
                role: { not: 'SUPERADMIN' },
            },
            include: { plan: true },
        });
        const mrr = activeVendors.reduce((sum, v) => sum + v.plan.precio, 0);
        // Vendedores que vencen en 3 días
        const expiringVendors = await prisma_1.default.vendor.count({
            where: {
                fecha_vencimiento: {
                    gte: now,
                    lte: threeDaysFromNow,
                },
                role: { not: 'SUPERADMIN' },
            },
        });
        // Total vendedores por estado
        const totalVendors = await prisma_1.default.vendor.count({
            where: { role: { not: 'SUPERADMIN' } },
        });
        // Pagos pendientes de confirmar
        const pendingPayments = await prisma_1.default.pago.count({
            where: { status: 'PENDIENTE' },
        });
        // Servicios más activados
        const topServices = await prisma_1.default.miServicio.groupBy({
            by: ['servicio_id'],
            _count: { servicio_id: true },
            where: { activo: true },
            orderBy: { _count: { servicio_id: 'desc' } },
            take: 5,
        });
        // Obtener nombres de los servicios top
        const topServicioIds = topServices.map(s => s.servicio_id);
        const servicioNames = await prisma_1.default.servicioBase.findMany({
            where: { id: { in: topServicioIds } },
            select: { id: true, nombre: true },
        });
        const topServicesWithNames = topServices.map(s => ({
            servicio_id: s.servicio_id,
            nombre: servicioNames.find(sn => sn.id === s.servicio_id)?.nombre || 'Desconocido',
            count: s._count.servicio_id,
        }));
        // Nuevos vendedores últimas 8 semanas
        const eightWeeksAgo = new Date();
        eightWeeksAgo.setDate(eightWeeksAgo.getDate() - 56);
        const newVendorsRaw = await prisma_1.default.vendor.findMany({
            where: {
                fecha_registro: { gte: eightWeeksAgo },
                role: { not: 'SUPERADMIN' },
            },
            select: { fecha_registro: true },
        });
        // Agrupar por semana
        const weeklyNewVendors = {};
        newVendorsRaw.forEach(v => {
            const weekStart = new Date(v.fecha_registro);
            weekStart.setDate(weekStart.getDate() - weekStart.getDay());
            const key = weekStart.toISOString().split('T')[0];
            weeklyNewVendors[key] = (weeklyNewVendors[key] || 0) + 1;
        });
        // Actividad Reciente (Últimos 10 eventos)
        const [lastVendors, lastPayments, lastOrders] = await Promise.all([
            prisma_1.default.vendor.findMany({ take: 5, orderBy: { fecha_registro: 'desc' }, select: { nombre: true, alias: true, fecha_registro: true } }),
            prisma_1.default.pago.findMany({ take: 5, orderBy: { creado_en: 'desc' }, include: { vendor: { select: { alias: true } } } }),
            prisma_1.default.pedido.findMany({ take: 5, orderBy: { creado_en: 'desc' }, include: { vendor: { select: { alias: true } } } }),
        ]);
        const recent_activity = [
            ...lastVendors.map(v => ({ type: 'VENDOR', title: `Nuevo vendedor: ${v.nombre}`, subtitle: `@${v.alias}`, date: v.fecha_registro })),
            ...lastPayments.map(p => ({ type: 'PAYMENT', title: `Pago ${p.status}`, subtitle: `@${p.vendor.alias} - ${p.monto} Bs`, date: p.creado_en })),
            ...lastOrders.map(o => ({ type: 'ORDER', title: `Pedido ${o.status}`, subtitle: `De @${o.vendor.alias}`, date: o.creado_en })),
        ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 10);
        res.json({
            mrr,
            active_vendors: activeVendors.length,
            total_vendors: totalVendors,
            expiring_in_3_days: expiringVendors,
            pending_payments: pendingPayments,
            top_services: topServicesWithNames,
            weekly_new_vendors: weeklyNewVendors,
            recent_activity,
        });
    }
    catch (error) {
        console.error('Error en dashboard:', error);
        res.status(500).json({ error: 'Error obteniendo métricas' });
    }
});
// ═══════════════════════════════════════════
// GESTIÓN DE VENDEDORES
// ═══════════════════════════════════════════
/**
 * GET /api/admin/vendors
 * Lista todos los vendedores con filtros opcionales.
 * Query params: ?plan=Pro&status=ACTIVE&expiring=true
 */
router.get('/vendors', async (req, res) => {
    try {
        const { plan, status, expiring } = req.query;
        let whereClause = {
            role: { not: 'SUPERADMIN' },
        };
        if (status)
            whereClause.status = status;
        if (expiring === 'true') {
            const threeDays = new Date();
            threeDays.setDate(threeDays.getDate() + 3);
            whereClause.fecha_vencimiento = {
                gte: new Date(),
                lte: threeDays,
            };
        }
        const vendors = await prisma_1.default.vendor.findMany({
            where: whereClause,
            include: { plan: true },
            orderBy: { fecha_registro: 'desc' },
        });
        // Filtrar por nombre de plan si se proporcionó
        const filtered = plan
            ? vendors.filter((v) => v.plan.nombre.toLowerCase() === plan.toLowerCase())
            : vendors;
        res.json(filtered.map(v => ({
            id: v.id,
            nombre: v.nombre,
            alias: v.alias,
            telefono: v.telefono,
            whatsapp: v.whatsapp,
            plan: v.plan.nombre,
            plan_id: v.plan_id,
            status: v.status,
            role: v.role,
            fecha_registro: v.fecha_registro,
            fecha_vencimiento: v.fecha_vencimiento,
        })));
    }
    catch (error) {
        res.status(500).json({ error: 'Error obteniendo vendedores' });
    }
});
/**
 * POST /api/admin/vendors/:id/suspend
 * Suspende un vendedor manualmente.
 */
router.post('/vendors/:id/suspend', async (req, res) => {
    try {
        const { id } = req.params;
        const vendor = await prisma_1.default.vendor.update({
            where: { id },
            data: { status: 'SUSPENDED' },
        });
        res.json({ message: `Vendedor ${vendor.alias} suspendido`, vendor });
    }
    catch (error) {
        res.status(500).json({ error: 'Error suspendiendo vendedor' });
    }
});
/**
 * PUT /api/admin/vendors/:id
 * Edita los datos de un vendedor (nombre, alias, teléfono, whatsapp, contraseña).
 */
router.put('/vendors/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, alias, telefono, whatsapp, password } = req.body;
        // Verificar que el alias no esté en uso por otro vendedor
        if (alias) {
            const existing = await prisma_1.default.vendor.findFirst({
                where: { alias: alias.toLowerCase(), id: { not: id } },
            });
            if (existing) {
                res.status(409).json({ error: 'Ese alias ya está en uso por otro vendedor' });
                return;
            }
        }
        const updateData = {};
        if (nombre !== undefined)
            updateData.nombre = nombre;
        if (alias !== undefined)
            updateData.alias = alias.toLowerCase();
        if (telefono !== undefined)
            updateData.telefono = telefono;
        if (whatsapp !== undefined)
            updateData.whatsapp = whatsapp;
        if (password) {
            const bcrypt = await Promise.resolve().then(() => __importStar(require('bcryptjs')));
            updateData.password_hash = await bcrypt.hash(password, 10);
        }
        const updated = await prisma_1.default.vendor.update({
            where: { id },
            data: updateData,
            include: { plan: true },
        });
        res.json({ message: `Vendedor ${updated.alias} actualizado`, vendor: updated });
    }
    catch (error) {
        console.error('Error editando vendedor:', error);
        res.status(500).json({ error: 'Error actualizando vendedor' });
    }
});
/**
 * POST /api/admin/vendors/:id/activate
 * Reactiva un vendedor suspendido.
 */
router.post('/vendors/:id/activate', async (req, res) => {
    try {
        const { id } = req.params;
        const vendor = await prisma_1.default.vendor.update({
            where: { id },
            data: { status: 'ACTIVE' },
        });
        res.json({ message: `Vendedor ${vendor.alias} reactivado`, vendor });
    }
    catch (error) {
        res.status(500).json({ error: 'Error activando vendedor' });
    }
});
/**
 * POST /api/admin/vendors/:id/extend
 * Extiende 30 días la suscripción del vendedor.
 */
router.post('/vendors/:id/extend', async (req, res) => {
    try {
        const { id } = req.params;
        const vendor = await prisma_1.default.vendor.findUnique({ where: { id } });
        if (!vendor) {
            res.status(404).json({ error: 'Vendedor no encontrado' });
            return;
        }
        // Si está vencido, extender desde hoy; si no, desde la fecha actual de vencimiento
        const baseDate = new Date(vendor.fecha_vencimiento) < new Date()
            ? new Date()
            : new Date(vendor.fecha_vencimiento);
        baseDate.setDate(baseDate.getDate() + 30);
        const updated = await prisma_1.default.vendor.update({
            where: { id },
            data: {
                fecha_vencimiento: baseDate,
                status: 'ACTIVE',
                role: vendor.role === 'GUEST' ? 'VENDOR' : vendor.role,
            },
        });
        res.json({
            message: `Suscripción extendida +30 días para ${updated.alias}`,
            nueva_fecha_vencimiento: updated.fecha_vencimiento,
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Error extendiendo suscripción' });
    }
});
/**
 * PUT /api/admin/vendors/:id/plan
 * Cambia el plan de un vendedor.
 */
router.put('/vendors/:id/plan', async (req, res) => {
    try {
        const { id } = req.params;
        const { plan_id } = req.body;
        if (!plan_id) {
            res.status(400).json({ error: 'plan_id es requerido' });
            return;
        }
        const plan = await prisma_1.default.plan.findUnique({ where: { id: plan_id } });
        if (!plan) {
            res.status(404).json({ error: 'Plan no encontrado' });
            return;
        }
        const updated = await prisma_1.default.vendor.update({
            where: { id },
            data: { plan_id },
            include: { plan: true },
        });
        res.json({
            message: `Plan cambiado a ${updated.plan.nombre} para ${updated.alias}`,
            vendor: updated,
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Error cambiando plan' });
    }
});
// ═══════════════════════════════════════════
// GESTIÓN DE PLANES
// ═══════════════════════════════════════════
/**
 * GET /api/admin/planes
 * Lista todos los planes.
 */
router.get('/planes', async (_req, res) => {
    try {
        const planes = await prisma_1.default.plan.findMany({ orderBy: { precio: 'asc' } });
        res.json(planes);
    }
    catch (error) {
        res.status(500).json({ error: 'Error obteniendo planes' });
    }
});
/**
 * POST /api/admin/planes
 * Crea un nuevo plan.
 */
router.post('/planes', async (req, res) => {
    try {
        const plan = await prisma_1.default.plan.create({ data: req.body });
        res.status(201).json(plan);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creando plan' });
    }
});
/**
 * PUT /api/admin/planes/:id
 * Actualiza un plan existente.
 */
router.put('/planes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const plan = await prisma_1.default.plan.update({
            where: { id },
            data: req.body,
        });
        res.json(plan);
    }
    catch (error) {
        res.status(500).json({ error: 'Error actualizando plan' });
    }
});
// ═══════════════════════════════════════════
// GESTIÓN DE SERVICIOS BASE
// ═══════════════════════════════════════════
/**
 * GET /api/admin/servicios
 * Lista todos los servicios base.
 */
router.get('/servicios', async (_req, res) => {
    try {
        const servicios = await prisma_1.default.servicioBase.findMany({
            orderBy: { nombre: 'asc' },
        });
        res.json(servicios);
    }
    catch (error) {
        res.status(500).json({ error: 'Error obteniendo servicios' });
    }
});
/**
 * POST /api/admin/servicios
 * Crea un nuevo servicio base.
 */
router.post('/servicios', cloudinary_1.upload.single('logo'), async (req, res) => {
    try {
        const data = { ...req.body };
        const file = req.file;
        if (file) {
            data.logo_url = (0, cloudinary_1.getFileUrl)(file);
        }
        const servicio = await prisma_1.default.servicioBase.create({ data });
        res.status(201).json(servicio);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creando servicio' });
    }
});
/**
 * PUT /api/admin/servicios/:id
 * Actualiza un servicio base.
 */
router.put('/servicios/:id', cloudinary_1.upload.single('logo'), async (req, res) => {
    try {
        const { id } = req.params;
        const data = { ...req.body };
        const file = req.file;
        if (file) {
            data.logo_url = file.path;
        }
        const servicio = await prisma_1.default.servicioBase.update({
            where: { id },
            data: data,
        });
        res.json(servicio);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error actualizando servicio' });
    }
});
/**
 * DELETE /api/admin/servicios/:id
 * Desactiva un servicio base (soft delete).
 */
router.delete('/servicios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Soft-deleting service ID: ${id}`);
        await prisma_1.default.servicioBase.update({
            where: { id },
            data: { activo: false },
        });
        console.log(`Service ${id} marked as inactive.`);
        res.json({ message: 'Servicio desactivado' });
    }
    catch (error) {
        console.error("Error in DELETE /servicios/:id:", error);
        res.status(500).json({ error: 'Error desactivando servicio' });
    }
});
// ═══════════════════════════════════════════
// GESTIÓN DE MARKET SERVICES (Alias / Wrapper)
// ═══════════════════════════════════════════
router.get('/market-services', async (_req, res) => {
    try {
        const servicios = await prisma_1.default.servicioBase.findMany({
            orderBy: { nombre: 'asc' },
        });
        const mapped = servicios.map(s => ({
            id: s.id,
            nombre: s.nombre,
            descripcion: s.descripcion_base,
            precio: s.precio_sugerido,
            categoria: s.categoria,
            logo_url: s.logo_url,
            activo: s.activo,
            fecha_creacion: new Date().toISOString()
        }));
        res.json(mapped);
    }
    catch (error) {
        res.status(500).json({ error: 'Error obteniendo market services' });
    }
});
router.post('/market-services', cloudinary_1.upload.single('logo'), async (req, res) => {
    try {
        const { nombre, descripcion, precio, categoria, activo } = req.body;
        const file = req.file;
        const logo_url = file ? (0, cloudinary_1.getFileUrl)(file) : (req.body.logo_url || '');
        const servicio = await prisma_1.default.servicioBase.create({
            data: {
                nombre,
                descripcion_base: descripcion || '',
                precio_sugerido: parseFloat(precio || '0'),
                categoria: categoria || 'STREAMING',
                activo: activo === 'true' || activo === true,
                logo_url,
            }
        });
        res.status(201).json(servicio);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creando market service' });
    }
});
router.put('/market-services/:id', cloudinary_1.upload.single('logo'), async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, precio, categoria, activo } = req.body;
        const file = req.file;
        const dataToUpdate = {};
        if (nombre)
            dataToUpdate.nombre = nombre;
        if (descripcion)
            dataToUpdate.descripcion_base = descripcion;
        if (precio)
            dataToUpdate.precio_sugerido = parseFloat(precio);
        if (categoria)
            dataToUpdate.categoria = categoria;
        if (activo !== undefined)
            dataToUpdate.activo = activo === 'true' || activo === true;
        if (file) {
            dataToUpdate.logo_url = file.path;
        }
        else if (req.body.logo_url) {
            dataToUpdate.logo_url = req.body.logo_url;
        }
        const servicio = await prisma_1.default.servicioBase.update({
            where: { id },
            data: dataToUpdate,
        });
        res.json(servicio);
    }
    catch (error) {
        res.status(500).json({ error: 'Error actualizando market service' });
    }
});
router.delete('/market-services/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma_1.default.servicioBase.delete({
            where: { id }
        });
        res.json({ message: 'Market service eliminado' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error eliminando market service' });
    }
});
// ═══════════════════════════════════════════
// GESTIÓN DE IMÁGENES
// ═══════════════════════════════════════════
/**
 * GET /api/admin/imagenes
 * Lista todas las imágenes (incluídas las inactivas).
 */
router.get('/imagenes', async (_req, res) => {
    try {
        const imagenes = await prisma_1.default.imagen.findMany({
            orderBy: { creado_en: 'desc' },
            include: {
                servicio: {
                    select: {
                        id: true,
                        nombre: true,
                        logo_url: true
                    }
                }
            }
        });
        res.json(imagenes);
    }
    catch (error) {
        res.status(500).json({ error: 'Error obteniendo imágenes' });
    }
});
router.post('/imagenes', cloudinary_1.upload.single('imagen'), async (req, res) => {
    try {
        const { titulo, etiquetas, servicio_id } = req.body;
        const file = req.file;
        if (!file) {
            res.status(400).json({ error: 'No se subió ninguna imagen' });
            return;
        }
        const imagen = await prisma_1.default.imagen.create({
            data: {
                titulo: titulo || 'Sin título',
                public_id: file.filename,
                url_base: (0, cloudinary_1.getFileUrl)(file),
                etiquetas: etiquetas || '[]',
                servicio_id: servicio_id || null,
            },
            include: {
                servicio: {
                    select: {
                        id: true,
                        nombre: true,
                        logo_url: true
                    }
                }
            }
        });
        res.status(201).json(imagen);
    }
    catch (error) {
        console.error('Error subiendo imagen:', error);
        res.status(500).json({ error: 'Error creando imagen' });
    }
});
router.put('/imagenes/:id', cloudinary_1.upload.single('imagen'), async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, etiquetas, servicio_id } = req.body;
        const file = req.file;
        const data = {
            ...(titulo !== undefined && { titulo }),
            ...(etiquetas !== undefined && { etiquetas }),
            ...(servicio_id !== undefined && { servicio_id: servicio_id || null }),
        };
        if (file) {
            data.public_id = file.filename;
            data.url_base = (0, cloudinary_1.getFileUrl)(file);
        }
        const updated = await prisma_1.default.imagen.update({
            where: { id },
            data,
            include: {
                servicio: {
                    select: {
                        id: true,
                        nombre: true,
                        logo_url: true
                    }
                }
            }
        });
        res.json(updated);
    }
    catch (error) {
        console.error('Error actualizando imagen:', error);
        res.status(500).json({ error: 'Error actualizando imagen' });
    }
});
/**
 * DELETE /api/admin/imagenes/:id
 * Desactiva una imagen (soft delete).
 */
router.delete('/imagenes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma_1.default.imagen.update({
            where: { id },
            data: { activo: false },
        });
        res.json({ message: 'Imagen desactivada' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error desactivando imagen' });
    }
});
// ═══════════════════════════════════════════
// GESTIÓN DE PAGOS
// ═══════════════════════════════════════════
/**
 * GET /api/admin/pagos
 * Lista todos los pagos con filtro opcional por estado.
 * Query param: ?status=PENDIENTE
 */
router.get('/pagos', async (req, res) => {
    try {
        const { status, vendor_id } = req.query;
        const pagos = await prisma_1.default.pago.findMany({
            where: {
                ...(status && { status: status }),
                ...(vendor_id && { vendor_id: vendor_id }),
            },
            include: {
                vendor: { select: { nombre: true, alias: true, telefono: true } },
                plan: { select: { nombre: true } }
            },
            orderBy: { creado_en: 'desc' },
        });
        res.json(pagos);
    }
    catch (error) {
        res.status(500).json({ error: 'Error obteniendo pagos' });
    }
});
/**
 * POST /api/admin/pagos/:id/confirm
 * Confirma un pago y extiende la suscripción del vendedor.
 *
 * Lógica: Busca el plan asociado al pago → suma plan.dias días
 * a la fecha de vencimiento del vendor.
 */
router.post('/pagos/:id/confirm', async (req, res) => {
    try {
        const { id } = req.params;
        const pago = await prisma_1.default.pago.findUnique({ where: { id } });
        if (!pago) {
            res.status(404).json({ error: 'Pago no encontrado' });
            return;
        }
        if (pago.status !== 'PENDIENTE') {
            res.status(400).json({ error: 'Este pago ya fue procesado' });
            return;
        }
        // Obtener el plan para saber cuántos días agregar
        const plan = await prisma_1.default.plan.findUnique({ where: { id: pago.plan_id } });
        if (!plan) {
            res.status(500).json({ error: 'Plan asociado al pago no encontrado' });
            return;
        }
        // Obtener vendor
        const vendor = await prisma_1.default.vendor.findUnique({ where: { id: pago.vendor_id } });
        if (!vendor) {
            res.status(500).json({ error: 'Vendor no encontrado' });
            return;
        }
        // Calcular nueva fecha: si vencido, desde hoy; si no, desde fecha actual
        const baseDate = new Date(vendor.fecha_vencimiento) < new Date()
            ? new Date()
            : new Date(vendor.fecha_vencimiento);
        baseDate.setDate(baseDate.getDate() + plan.dias);
        // Actualizar pago y vendor en transacción
        await prisma_1.default.$transaction([
            prisma_1.default.pago.update({
                where: { id },
                data: { status: 'CONFIRMADO', confirmado_en: new Date(), notas_admin: req.body.notas || null },
            }),
            prisma_1.default.vendor.update({
                where: { id: pago.vendor_id },
                data: {
                    fecha_vencimiento: baseDate,
                    plan_id: pago.plan_id,
                    status: 'ACTIVE',
                    role: 'VENDOR',
                },
            }),
        ]);
        // Lógica OneSignal: Notificar al vendedor
        try {
            await onesignal_1.OneSignal.sendNotification({
                headings: { es: '✅ PAGO CONFIRMADO' },
                contents: { es: `¡Felicidades! Tu cuenta ha sido activada hasta el ${baseDate.toLocaleDateString()}. 🚀` },
                filters: [{ field: 'tag', key: 'vendorId', relation: '=', value: pago.vendor_id }]
            });
        }
        catch (err) {
            console.error('OneSignal Error:', err);
        }
        // Notificar al vendedor
        try {
            const { OneSignal } = await Promise.resolve().then(() => __importStar(require('../lib/onesignal')));
            await OneSignal.sendSystemNotification(pago.vendor_id, '✅ Pago Confirmado', `Tu pago de ${pago.monto} Bs ha sido aprobado. ¡Suscripción extendida!`);
        }
        catch (e) {
            console.error('Error enviando push:', e);
        }
        res.json({
            message: `Pago confirmado. Suscripción extendida +${plan.dias} días.`,
            nueva_fecha_vencimiento: baseDate,
        });
    }
    catch (error) {
        console.error('Error confirmando pago:', error);
        res.status(500).json({ error: 'Error confirmando pago' });
    }
});
/**
 * POST /api/admin/pagos/:id/reject
 * Rechaza un pago con motivo opcional.
 */
router.post('/pagos/:id/reject', async (req, res) => {
    try {
        const { id } = req.params;
        const { notas } = req.body;
        const pago = await prisma_1.default.pago.update({
            where: { id },
            data: { status: 'RECHAZADO', notas_admin: notas || null },
        });
        // Notificar al vendedor
        try {
            const { OneSignal } = await Promise.resolve().then(() => __importStar(require('../lib/onesignal')));
            await OneSignal.sendSystemNotification(pago.vendor_id, '❌ Pago Rechazado', `Tu comprobante de pago fue rechazado. Razón: ${notas || 'Consulta con soporte'}`);
        }
        catch (e) {
            console.error('Error enviando push:', e);
        }
        res.json({ message: 'Pago rechazado' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error rechazando pago' });
    }
});
// ═══════════════════════════════════════════
// GESTIÓN DE PARTIDOS
// ═══════════════════════════════════════════
/**
 * GET /api/admin/partidos
 * Lista todos los partidos.
 */
router.get('/partidos', async (_req, res) => {
    try {
        const partidos = await prisma_1.default.partido.findMany({
            orderBy: { fecha: 'desc' },
        });
        res.json(partidos);
    }
    catch (error) {
        res.status(500).json({ error: 'Error obteniendo partidos' });
    }
});
/**
 * POST /api/admin/partidos
 * Crea un nuevo partido con soporte para logos locales.
 */
router.post('/partidos', cloudinary_1.upload.fields([
    { name: 'logo_local', maxCount: 1 },
    { name: 'logo_visita', maxCount: 1 }
]), async (req, res) => {
    try {
        const data = { ...req.body };
        const files = req.files;
        if (files['logo_local']) {
            data.logo_local = files['logo_local'][0].path;
        }
        if (files['logo_visita']) {
            data.logo_visita = files['logo_visita'][0].path;
        }
        // Convert boolean strings if they come from FormData
        if (typeof data.requiere_iptv === 'string')
            data.requiere_iptv = data.requiere_iptv === 'true';
        if (typeof data.activo === 'string')
            data.activo = data.activo === 'true';
        const partido = await prisma_1.default.partido.create({ data });
        // Notificación OneSignal
        if (partido.activo) {
            onesignal_1.OneSignal.notifyNewMatch({
                equipo_a: partido.equipo_local,
                equipo_b: partido.equipo_visita,
                liga: partido.liga || 'Deportes',
                canal: partido.canal
            });
        }
        res.status(201).json(partido);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creando partido' });
    }
});
/**
 * PUT /api/admin/partidos/:id
 * Actualiza un partido con soporte para logos locales.
 */
router.put('/partidos/:id', cloudinary_1.upload.fields([
    { name: 'logo_local', maxCount: 1 },
    { name: 'logo_visita', maxCount: 1 }
]), async (req, res) => {
    try {
        const { id } = req.params;
        const data = { ...req.body };
        const files = req.files;
        if (files['logo_local']) {
            data.logo_local = files['logo_local'][0].path;
        }
        if (files['logo_visita']) {
            data.logo_visita = files['logo_visita'][0].path;
        }
        // Convert boolean strings
        if (typeof data.requiere_iptv === 'string')
            data.requiere_iptv = data.requiere_iptv === 'true';
        if (typeof data.activo === 'string')
            data.activo = data.activo === 'true';
        const partido = await prisma_1.default.partido.update({
            where: { id },
            data: data,
        });
        res.json(partido);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error actualizando partido' });
    }
});
// ═══════════════════════════════════════════
// AJUSTES GLOBALES
// ═══════════════════════════════════════════
/**
 * GET /api/admin/ajustes
 * Obtiene los ajustes de la plataforma.
 */
router.get('/ajustes', async (_req, res) => {
    try {
        const ajustes = await prisma_1.default.ajustesPlataforma.findUnique({ where: { id: '1' } });
        res.json(ajustes);
    }
    catch (error) {
        res.status(500).json({ error: 'Error obteniendo ajustes' });
    }
});
/**
 * PUT /api/admin/ajustes
 * Actualiza los ajustes de la plataforma con soporte universal de subida.
 */
router.put('/ajustes', cloudinary_1.upload.any(), async (req, res) => {
    try {
        const files = req.files;
        const data = {};
        const dbgMsg = `[${new Date().toISOString()}] AJUSTES PUT - Files: ${files?.length || 0}, Body: ${JSON.stringify(req.body)}\n`;
        fs_1.default.appendFileSync(LOG_FILE, dbgMsg);
        // Mapeo seguro de campos de texto
        const allowedFields = [
            'nombre_plataforma', 'tigo_money_numero', 'texto_legal',
            'noticia_global', 'whatsapp_soporte', 'qr_cobro_url', 'logo_url'
        ];
        allowedFields.forEach(field => {
            if (req.body[field] !== undefined) {
                data[field] = req.body[field];
            }
        });
        if (files && files.length > 0) {
            files.forEach(file => {
                const filePath = (0, cloudinary_1.getFileUrl)(file);
                fs_1.default.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] File detected: ${file.fieldname} -> ${filePath}\n`);
                if (file.fieldname === 'qr' || file.fieldname === 'archivo_qr' || files.length === 1) {
                    if (file.fieldname === 'qr' || file.fieldname === 'archivo_qr' || (files.length === 1 && !data.qr_cobro_url)) {
                        data.qr_cobro_url = filePath;
                    }
                }
                if (file.fieldname === 'logo') {
                    data.logo_url = filePath;
                }
            });
        }
        // Ultima validación de nulidad para evitar borrar URLs existentes con strings vacíos si venía un archivo
        // (Aunque logicamente el foreach ya lo sobreescribió)
        fs_1.default.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] FINAL DATA TO DB: ${JSON.stringify(data)}\n`);
        const ajustes = await prisma_1.default.ajustesPlataforma.upsert({
            where: { id: '1' },
            update: data,
            create: { id: '1', ...data }
        });
        fs_1.default.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] DB RESULT: ${JSON.stringify(ajustes)}\n`);
        res.json({ message: 'Ajustes actualizados', ajustes });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error actualizando ajustes' });
    }
});
/**
 * POST /api/admin/broadcast
 * Envía una notificación push global manual.
 */
router.post('/broadcast', async (req, res) => {
    try {
        const { title, message } = req.body;
        await onesignal_1.OneSignal.sendNotification({
            headings: { es: title },
            contents: { es: message },
            segments: ['All']
        });
        res.json({ message: 'Notificación enviada a todos' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error enviando broadcast' });
    }
});
/**
 * POST /api/admin/marketplace/track
 * Registra un interés en un servicio (Click analytics) en la base de datos.
 */
router.post('/marketplace/track', async (req, res) => {
    try {
        const { vendor_id, servicio_id, proveedor_id } = req.body;
        if (!vendor_id || !servicio_id || !proveedor_id) {
            res.status(400).json({ ok: false, error: 'Faltan campos requeridos' });
            return;
        }
        await prisma_1.default.clickMarketplace.create({
            data: { vendor_id, servicio_id, proveedor_id }
        });
        res.json({ ok: true });
    }
    catch (error) {
        console.error('[ANALYTICS] Error guardando click:', error);
        res.status(500).json({ ok: false });
    }
});
/**
 * GET /api/admin/analytics/intentions
 * Agrupa los clicks del Marketplace por servicio.
 * Devuelve el ranking de servicios más solicitados.
 */
router.get('/analytics/intentions', async (_req, res) => {
    try {
        const clicks = await prisma_1.default.clickMarketplace.groupBy({
            by: ['servicio_id'],
            _count: { servicio_id: true },
            orderBy: { _count: { servicio_id: 'desc' } },
            take: 10,
        });
        // Enriquecer con nombre del servicio
        const enriched = await Promise.all(clicks.map(async (c) => {
            const servicio = await prisma_1.default.servicioBase.findUnique({
                where: { id: c.servicio_id },
                select: { nombre: true, logo_url: true, proveedor_id: true },
            });
            return {
                servicio_id: c.servicio_id,
                nombre: servicio?.nombre || 'Servicio desconocido',
                logo_url: servicio?.logo_url || null,
                proveedor_id: servicio?.proveedor_id || null,
                clicks: c._count.servicio_id,
            };
        }));
        res.json(enriched);
    }
    catch (error) {
        res.status(500).json({ error: 'Error obteniendo analítica de intenciones' });
    }
});
/**
 * GET /api/admin/marketplace/proposals
 * Lista todas las propuestas de IPTV de proveedores externos.
 */
router.get('/marketplace/proposals', async (_req, res) => {
    try {
        console.log("Fetching active marketplace proposals...");
        const proposals = await prisma_1.default.servicioBase.findMany({
            where: {
                es_iptv_propio: false,
                activo: true
            },
            include: {
                proveedor: { select: { nombre: true, alias: true, telefono: true } }
            },
            orderBy: { nombre: 'asc' }
        });
        console.log(`Found ${proposals.length} active proposals.`);
        res.json(proposals);
    }
    catch (error) {
        res.status(500).json({ error: 'Error obteniendo propuestas del marketplace' });
    }
});
/**
 * PATCH /api/admin/marketplace/:id/approve
 * Aprueba o rechaza una propuesta y fija la comisión pactada.
 */
router.patch('/marketplace/:id/approve', async (req, res) => {
    try {
        const { id } = req.params;
        const { estado_aprobacion, comision_pct } = req.body;
        const updated = await prisma_1.default.servicioBase.update({
            where: { id },
            data: { estado_aprobacion, comision_pct: parseFloat(comision_pct || 10) },
        });
        res.json({ message: `Propuesta actualizada: ${estado_aprobacion}`, servicio: updated });
    }
    catch (error) {
        res.status(500).json({ error: 'Error aprobando/rechazando propuesta' });
    }
});
// ═══════════════════════════════════════════
// GESTIÓN DE PEDIDOS (PLAN PRO)
// ═══════════════════════════════════════════
/**
 * GET /api/admin/pedidos
 * Lista todos los pedidos de material/servicios.
 */
router.get('/pedidos', async (_req, res) => {
    try {
        const pedidos = await prisma_1.default.pedido.findMany({
            include: {
                vendor: { select: { nombre: true, alias: true, logo_url: true } }
            },
            orderBy: { creado_en: 'desc' }
        });
        res.json(pedidos);
    }
    catch (error) {
        res.status(500).json({ error: 'Error obteniendo pedidos' });
    }
});
/**
 * PATCH /api/admin/pedidos/:id
 * Actualiza el estado de un pedido.
 */
router.patch('/pedidos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { status, notas } = req.body;
        const pedido = await prisma_1.default.pedido.update({
            where: { id },
            data: { status, notas }, // Usamos notas para feedback
            include: { vendor: true }
        });
        // Notificar al vendedor sobre el cambio de estado de su pedido en su App
        try {
            const { OneSignal } = await Promise.resolve().then(() => __importStar(require('../lib/onesignal')));
            let titulo = '📦 Actualización de Pedido';
            let mensaje = `Tu pedido ha cambiado a estado: ${status}.`;
            if (status === 'COMPLETADO') {
                titulo = '✅ Pedido Completado';
                mensaje = `Tu pedido ha sido completado exitosamente. ${notas ? `Notas: ${notas}` : ''}`;
            }
            else if (status === 'RECHAZADO') {
                titulo = '❌ Pedido Rechazado';
                mensaje = `Tu pedido ha sido rechazado. ${notas ? `Motivo: ${notas}` : ''}`;
            }
            await OneSignal.sendSystemNotification(pedido.vendor_id, titulo, mensaje);
        }
        catch (e) {
            console.error('Error enviando push pedido:', e);
        }
        res.json(pedido);
    }
    catch (error) {
        res.status(500).json({ error: 'Error actualizando pedido' });
    }
});
/**
 * POST /api/admin/pagos/manual
 * Registra un pago manualmente subiendo el comprobante.
 */
router.post('/pagos/manual', cloudinary_1.upload.single('imagen'), async (req, res) => {
    try {
        const { vendor_id, plan_id, monto } = req.body;
        const file = req.file;
        if (!vendor_id || !plan_id || !monto) {
            res.status(400).json({ error: 'Faltan campos obligatorios' });
            return;
        }
        // 1. Crear el pago confirmado
        const pago = await prisma_1.default.pago.create({
            data: {
                vendor_id,
                plan_id,
                monto: parseFloat(monto),
                status: 'CONFIRMADO',
                comprobante_url: file?.path || null,
                notas_admin: 'Registro manual por administrador'
            },
            include: {
                vendor: true,
                plan: true
            }
        });
        // 2. Lógica de activación (sumar días)
        const vendor = await prisma_1.default.vendor.findUnique({
            where: { id: vendor_id },
            include: { plan: true }
        });
        if (!vendor) {
            res.status(404).json({ error: 'Vendedor no encontrado' });
            return;
        }
        const plan = await prisma_1.default.plan.findUnique({ where: { id: plan_id } });
        if (!plan) {
            res.status(404).json({ error: 'Plan no encontrado' });
            return;
        }
        const now = new Date();
        let currentVencimiento = vendor.fecha_vencimiento ? new Date(vendor.fecha_vencimiento) : now;
        // Si ya venció, empezamos desde hoy. Si no, sumamos al existente.
        const baseDate = currentVencimiento > now ? currentVencimiento : now;
        const newVencimiento = new Date(baseDate);
        newVencimiento.setDate(newVencimiento.getDate() + plan.dias);
        await prisma_1.default.vendor.update({
            where: { id: vendor_id },
            data: {
                plan_id: plan_id,
                fecha_vencimiento: newVencimiento,
                status: 'ACTIVE'
            }
        });
        // 3. Notificación OneSignal
        try {
            await onesignal_1.OneSignal.sendSystemNotification(vendor_id, 'SUSCRIPCIÓN ACTIVADA ✅', `Tu pago ha sido registrado manualmente. Cuenta activa hasta el ${newVencimiento.toLocaleDateString('es-ES')}`);
        }
        catch (err) {
            console.error('Error enviando notificación OneSignal:', err);
        }
        res.json({ message: 'Pago registrado y suscripción activada', pago });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error registrando pago manual' });
    }
});
// ═══════════════════════════════════════════
// ESTRENOS
// ═══════════════════════════════════════════
/**
 * GET /api/admin/estrenos
 */
router.get('/estrenos', async (_req, res) => {
    try {
        const estrenos = await prisma_1.default.estreno.findMany({
            orderBy: [{ fecha_estreno: 'desc' }, { creado_en: 'desc' }],
        });
        res.json(estrenos);
    }
    catch (error) {
        res.status(500).json({ error: 'Error obteniendo estrenos' });
    }
});
/**
 * POST /api/admin/estrenos
 */
router.post('/estrenos', cloudinary_1.upload.single('imagen'), async (req, res) => {
    try {
        const { titulo, descripcion, plataforma, fecha_estreno, imagen_url } = req.body;
        const file = req.file;
        const estreno = await prisma_1.default.estreno.create({
            data: {
                titulo,
                descripcion: descripcion || null,
                plataforma: plataforma || 'OTHER',
                fecha_estreno: fecha_estreno ? new Date(fecha_estreno) : null,
                imagen_url: file ? (0, cloudinary_1.getFileUrl)(file) : (imagen_url || null),
            }
        });
        res.status(201).json(estreno);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creando estreno' });
    }
});
/**
 * PUT /api/admin/estrenos/:id
 */
router.put('/estrenos/:id', cloudinary_1.upload.single('imagen'), async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, descripcion, plataforma, fecha_estreno, imagen_url, activo } = req.body;
        const file = req.file;
        const data = {};
        if (titulo !== undefined)
            data.titulo = titulo;
        if (descripcion !== undefined)
            data.descripcion = descripcion || null;
        if (plataforma !== undefined)
            data.plataforma = plataforma;
        if (fecha_estreno !== undefined)
            data.fecha_estreno = fecha_estreno ? new Date(fecha_estreno) : null;
        if (activo !== undefined)
            data.activo = activo === 'true' || activo === true;
        if (file)
            data.imagen_url = (0, cloudinary_1.getFileUrl)(file);
        else if (imagen_url !== undefined)
            data.imagen_url = imagen_url || null;
        const estreno = await prisma_1.default.estreno.update({ where: { id }, data });
        res.json(estreno);
    }
    catch (error) {
        res.status(500).json({ error: 'Error actualizando estreno' });
    }
});
/**
 * DELETE /api/admin/estrenos/:id
 */
router.delete('/estrenos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma_1.default.estreno.update({ where: { id }, data: { activo: false } });
        res.json({ message: 'Estreno desactivado' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error desactivando estreno' });
    }
});
// ═══════════════════════════════════════════
// GESTIÓN DE MENSAJES RÁPIDOS
// ═══════════════════════════════════════════
router.get('/mensajes', async (_req, res) => {
    try {
        const mensajes = await prisma_1.default.mensajeRapido.findMany({
            orderBy: { orden: 'asc' },
        });
        res.json(mensajes);
    }
    catch (error) {
        res.status(500).json({ error: 'Error obteniendo mensajes rápidos' });
    }
});
router.post('/mensajes', async (req, res) => {
    try {
        const { titulo, template, orden } = req.body;
        const mensaje = await prisma_1.default.mensajeRapido.create({
            data: {
                titulo,
                template,
                orden: parseInt(orden) || 0,
                activo: true,
            }
        });
        res.status(201).json(mensaje);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creando mensaje rápido' });
    }
});
router.put('/mensajes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, template, orden, activo } = req.body;
        const updated = await prisma_1.default.mensajeRapido.update({
            where: { id: id },
            data: {
                titulo,
                template,
                orden: parseInt(orden),
                activo: activo === 'true' || activo === true,
            }
        });
        res.json(updated);
    }
    catch (error) {
        res.status(500).json({ error: 'Error actualizando mensaje' });
    }
});
router.delete('/mensajes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma_1.default.mensajeRapido.delete({ where: { id: id } });
        res.json({ success: true });
    }
    catch (error) {
        res.status(500).json({ error: 'Error eliminando mensaje' });
    }
});
exports.default = router;
//# sourceMappingURL=admin.js.map