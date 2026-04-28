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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
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
            es_colaborador: v.es_colaborador,
            fecha_registro: v.fecha_registro,
            fecha_vencimiento: v.fecha_vencimiento,
        })));
    }
    catch (error) {
        res.status(500).json({ error: 'Error obteniendo vendedores' });
    }
});
/**
 * PATCH /api/admin/vendors/:id/colaborador
 * Toggle es_colaborador field for a vendor (SUPERADMIN only).
 */
router.patch('/vendors/:id/colaborador', async (req, res) => {
    try {
        // Only SUPERADMIN can toggle this
        if (req.vendor?.role !== 'SUPERADMIN') {
            res.status(403).json({ error: 'Solo el administrador puede modificar colaboradores' });
            return;
        }
        const { id } = req.params;
        const vendor = await prisma_1.default.vendor.findUnique({ where: { id } });
        if (!vendor) {
            res.status(404).json({ error: 'Vendedor no encontrado' });
            return;
        }
        const updated = await prisma_1.default.vendor.update({
            where: { id },
            data: { es_colaborador: !vendor.es_colaborador },
        });
        res.json({ message: `Colaborador ${updated.es_colaborador ? 'activado' : 'desactivado'}`, es_colaborador: updated.es_colaborador });
    }
    catch (error) {
        res.status(500).json({ error: 'Error actualizando colaborador' });
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
            updateData.password_hash = await bcryptjs_1.default.hash(password, 10);
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
/**
 * DELETE /api/admin/vendors/:id
 * Elimina permanentemente a un vendedor y todo su historial.
 */
router.delete('/vendors/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const vendor = await prisma_1.default.vendor.findUnique({ where: { id } });
        if (!vendor) {
            res.status(404).json({ error: 'Vendedor no encontrado' });
            return;
        }
        // Al no existir cascade delete nativo, debemos limpiar las tablas hijas.
        await prisma_1.default.$transaction([
            prisma_1.default.miServicio.deleteMany({ where: { vendor_id: id } }),
            prisma_1.default.pedido.deleteMany({ where: { vendor_id: id } }),
            prisma_1.default.pago.deleteMany({ where: { vendor_id: id } }),
            prisma_1.default.clickMarketplace.deleteMany({ where: { vendor_id: id } }),
            // Liberar las credenciales que el vendor tenía asignadas
            prisma_1.default.credencial.updateMany({
                where: { asignada_a: id },
                data: { asignada_a: null, disponible: true }
            }),
            // Finalmente borrar el vendedor
            prisma_1.default.vendor.delete({ where: { id } })
        ]);
        res.json({ message: `Vendedor ${vendor.alias} eliminado permanentemente` });
    }
    catch (error) {
        console.error('Error eliminando vendedor:', error);
        res.status(500).json({ error: 'Error eliminando vendedor' });
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
/**
 * DELETE /api/admin/planes/:id
 * Elimina un plan si no tiene dependencias.
 */
router.delete('/planes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const vendorsCount = await prisma_1.default.vendor.count({ where: { plan_id: id } });
        if (vendorsCount > 0) {
            res.status(400).json({ error: 'Este plan tiene vendedores asociados. Cambia a los vendedores de plan o desactiva el plan editándolo.' });
            return;
        }
        const pagosCount = await prisma_1.default.pago.count({ where: { plan_id: id } });
        if (pagosCount > 0) {
            res.status(400).json({ error: 'Este plan tiene un historial de pagos. Te recomendamos desactivarlo en vez de eliminarlo.' });
            return;
        }
        await prisma_1.default.plan.delete({ where: { id } });
        res.json({ message: 'Plan eliminado correctamente' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error eliminando plan' });
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
            include: {
                proveedor: {
                    select: { alias: true, nombre: true }
                }
            },
            orderBy: { nombre: 'asc' },
        });
        res.json(servicios.map(s => ({
            ...s,
            proveedor_alias: s.proveedor?.alias || 'SISTEMA',
            proveedor_nombre: s.proveedor?.nombre || 'Plataforma Ares'
        })));
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
// NOTA: Rutas /market-services eliminadas.
// Usar /api/admin/servicios para todo el CRUD de ServicioBase.
// ═══════════════════════════════════════════
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
 * GET /api/admin/vendedores
 * Lista todos los vendedores (utilizado para cruzar con pedidos y credenciales)
 */
router.get('/vendedores', async (_req, res) => {
    try {
        const vendors = await prisma_1.default.vendor.findMany({
            select: { id: true, nombre: true, alias: true, role: true, _count: { select: { pedidos: true, credenciales: true } } },
            orderBy: { fecha_registro: 'desc' }
        });
        res.json(vendors);
    }
    catch (error) {
        res.status(500).json({ error: 'Error obteniendo vendedores' });
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
/**
 * DELETE /api/admin/pagos/:id
 * Elimina un registro de pago permanentemente.
 */
router.delete('/pagos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma_1.default.pago.delete({ where: { id } });
        res.json({ message: 'Pago eliminado correctamente' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error eliminando pago' });
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
    { name: 'logo_visita', maxCount: 1 },
    { name: 'imagen_personalizada', maxCount: 1 }
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
        if (files['imagen_personalizada']) {
            data.imagen_personalizada = files['imagen_personalizada'][0].path;
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
    { name: 'logo_visita', maxCount: 1 },
    { name: 'imagen_personalizada', maxCount: 1 }
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
        if (files['imagen_personalizada']) {
            data.imagen_personalizada = files['imagen_personalizada'][0].path;
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
            'noticia_global', 'whatsapp_soporte', 'qr_cobro_url', 'logo_url',
            'qr_cobro_bob', 'qr_cobro_usd', 'tasa_cambio_bob',
            'watermark_enabled', 'watermark_type', 'watermark_text', 'watermark_opacity'
        ];
        allowedFields.forEach(field => {
            if (req.body[field] !== undefined) {
                if (field === 'tasa_cambio_bob' || field === 'watermark_opacity') {
                    data[field] = parseFloat(req.body[field]);
                    if (field === 'tasa_cambio_bob' && isNaN(data[field]))
                        data[field] = 6.96;
                    if (field === 'watermark_opacity' && isNaN(data[field]))
                        data[field] = 0.5;
                }
                else if (field === 'watermark_enabled') {
                    data[field] = req.body[field] === 'true' || req.body[field] === true;
                }
                else {
                    data[field] = req.body[field];
                }
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
                if (file.fieldname === 'qr_bob')
                    data.qr_cobro_bob = filePath;
                if (file.fieldname === 'qr_usd')
                    data.qr_cobro_usd = filePath;
                if (file.fieldname === 'logo') {
                    data.logo_url = filePath;
                }
                if (file.fieldname === 'watermark_archivo') {
                    data.watermark_image_url = filePath;
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
                vendor: { select: { nombre: true, alias: true, logo_url: true } },
                servicio: { select: { nombre: true, logo_url: true, categoria: true } }
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
 * Actualiza el estado de un pedido y permite enviar respuesta/credenciales.
 */
router.patch('/pedidos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { status, notas, respuesta_admin } = req.body;
        const updateData = {};
        if (status)
            updateData.status = status;
        if (notas !== undefined)
            updateData.notas = notas;
        if (respuesta_admin !== undefined) {
            updateData.respuesta_admin = respuesta_admin;
            updateData.respondido_en = new Date();
        }
        const pedido = await prisma_1.default.pedido.update({
            where: { id },
            data: updateData,
            include: { vendor: true }
        });
        // Notificar al vendedor sobre el cambio de estado de su pedido en su App
        try {
            let titulo = '📦 Actualización de Pedido';
            let mensaje = `Tu pedido ha cambiado a estado: ${status}.`;
            if (status === 'COMPLETADO') {
                titulo = '✅ Pedido Completado';
                mensaje = respuesta_admin
                    ? `¡Pedido completado! Revisa la respuesta del admin en tus pedidos.`
                    : `Tu pedido ha sido completado exitosamente.`;
            }
            else if (status === 'CANCELADO') {
                titulo = '❌ Pedido Cancelado';
                mensaje = `Tu pedido ha sido cancelado. ${notas ? `Motivo: ${notas}` : ''}`;
            }
            await onesignal_1.OneSignal.sendSystemNotification(pedido.vendor_id, titulo, mensaje);
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
 * DELETE /api/admin/pedidos/:id
 * Elimina un pedido y libera sus credenciales.
 */
router.delete('/pedidos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma_1.default.$transaction([
            prisma_1.default.credencial.updateMany({
                where: { pedido_id: id },
                data: { pedido_id: null, asignada_a: null, disponible: true }
            }),
            prisma_1.default.pedido.delete({ where: { id } })
        ]);
        res.json({ message: 'Pedido eliminado correctamente' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error eliminando pedido' });
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
// ═══════════════════════════════════════════
// CREAR VENDEDOR MANUAL
// ═══════════════════════════════════════════
/**
 * POST /api/admin/vendors
 * Crea un vendedor manualmente desde el panel de admin.
 */
router.post('/vendors', async (req, res) => {
    try {
        const { nombre, alias, telefono, plan_id, password, whatsapp } = req.body;
        if (!nombre || !alias || !telefono || !plan_id || !password) {
            res.status(400).json({ error: 'nombre, alias, telefono, plan_id y password son requeridos' });
            return;
        }
        // Verificar alias único
        const existingAlias = await prisma_1.default.vendor.findFirst({ where: { alias: alias.toLowerCase() } });
        if (existingAlias) {
            res.status(409).json({ error: 'Ese alias ya está en uso' });
            return;
        }
        // Verificar teléfono único
        const existingPhone = await prisma_1.default.vendor.findFirst({ where: { telefono } });
        if (existingPhone) {
            res.status(409).json({ error: 'Ese teléfono ya está registrado' });
            return;
        }
        const plan = await prisma_1.default.plan.findUnique({ where: { id: plan_id } });
        if (!plan) {
            res.status(404).json({ error: 'Plan no encontrado' });
            return;
        }
        const password_hash = await bcryptjs_1.default.hash(password, 10);
        const vencimiento = new Date();
        vencimiento.setDate(vencimiento.getDate() + plan.dias);
        const vendor = await prisma_1.default.vendor.create({
            data: {
                nombre,
                alias: alias.toLowerCase(),
                telefono,
                password_hash,
                plan_id,
                whatsapp: whatsapp || telefono,
                fecha_vencimiento: vencimiento,
                status: 'ACTIVE',
                role: 'VENDOR',
            },
            include: { plan: true },
        });
        res.status(201).json({
            message: `Vendedor ${vendor.alias} creado exitosamente`,
            vendor: {
                id: vendor.id,
                nombre: vendor.nombre,
                alias: vendor.alias,
                telefono: vendor.telefono,
                plan: vendor.plan.nombre,
                fecha_vencimiento: vendor.fecha_vencimiento,
            },
        });
    }
    catch (error) {
        console.error('Error creando vendedor:', error);
        res.status(500).json({ error: 'Error creando vendedor' });
    }
});
// ═══════════════════════════════════════════
// GESTIÓN DE CREDENCIALES
// ═══════════════════════════════════════════
/**
 * GET /api/admin/credenciales
 * Lista todas las credenciales. Filtro opcional: ?servicio_id=xxx&disponible=true
 */
router.get('/credenciales', async (req, res) => {
    try {
        const { servicio_id, disponible } = req.query;
        const where = {};
        if (servicio_id)
            where.servicio_id = servicio_id;
        if (disponible !== undefined)
            where.disponible = disponible === 'true';
        const credenciales = await prisma_1.default.credencial.findMany({
            where,
            include: {
                servicio: { select: { nombre: true, logo_url: true } },
                vendor: { select: { nombre: true, alias: true } },
            },
            orderBy: { creado_en: 'desc' },
        });
        res.json(credenciales);
    }
    catch (error) {
        res.status(500).json({ error: 'Error obteniendo credenciales' });
    }
});
/**
 * POST /api/admin/credenciales
 * Crea una nueva credencial para un servicio.
 */
router.post('/credenciales', async (req, res) => {
    try {
        const { servicio_id, usuario, password, perfil, notas } = req.body;
        if (!servicio_id || !usuario || !password) {
            res.status(400).json({ error: 'servicio_id, usuario y password son requeridos' });
            return;
        }
        const credencial = await prisma_1.default.credencial.create({
            data: { servicio_id, usuario, password, perfil: perfil || null, notas: notas || null },
            include: { servicio: { select: { nombre: true } } },
        });
        res.status(201).json(credencial);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creando credencial' });
    }
});
/**
 * POST /api/admin/credenciales/bulk
 * Crea múltiples credenciales de una vez.
 */
router.post('/credenciales/bulk', async (req, res) => {
    try {
        const { credenciales } = req.body;
        // credenciales: [{ servicio_id, usuario, password, perfil?, notas? }]
        if (!Array.isArray(credenciales) || credenciales.length === 0) {
            res.status(400).json({ error: 'Se requiere un array de credenciales' });
            return;
        }
        const created = await prisma_1.default.credencial.createMany({
            data: credenciales.map((c) => ({
                servicio_id: c.servicio_id,
                usuario: c.usuario,
                password: c.password,
                perfil: c.perfil || null,
                notas: c.notas || null,
            })),
        });
        res.status(201).json({ message: `${created.count} credenciales creadas`, count: created.count });
    }
    catch (error) {
        res.status(500).json({ error: 'Error creando credenciales' });
    }
});
/**
 * PUT /api/admin/credenciales/:id
 * Edita una credencial existente.
 */
router.put('/credenciales/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { usuario, password, perfil, notas, disponible } = req.body;
        const updateData = {};
        if (usuario !== undefined)
            updateData.usuario = usuario;
        if (password !== undefined)
            updateData.password = password;
        if (perfil !== undefined)
            updateData.perfil = perfil;
        if (notas !== undefined)
            updateData.notas = notas;
        if (disponible !== undefined)
            updateData.disponible = disponible;
        const credencial = await prisma_1.default.credencial.update({
            where: { id },
            data: updateData,
        });
        res.json(credencial);
    }
    catch (error) {
        res.status(500).json({ error: 'Error actualizando credencial' });
    }
});
/**
 * POST /api/admin/credenciales/:id/asignar
 * Asigna manualmente una credencial a un vendedor.
 */
router.post('/credenciales/:id/asignar', async (req, res) => {
    try {
        const { id } = req.params;
        const { vendor_id } = req.body;
        if (!vendor_id) {
            res.status(400).json({ error: 'Falta proporcionar el vendor_id' });
            return;
        }
        await prisma_1.default.credencial.update({
            where: { id },
            data: {
                asignada_a: vendor_id,
                disponible: false
            }
        });
        res.json({ message: 'Credencial asignada exitosamente' });
    }
    catch (error) {
        console.error('Error asignando credencial:', error);
        res.status(500).json({ error: 'Error interno asignando la credencial' });
    }
});
/**
 * DELETE /api/admin/credenciales/:id
 * Elimina una credencial.
 */
router.delete('/credenciales/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma_1.default.credencial.delete({ where: { id } });
        res.json({ success: true });
    }
    catch (error) {
        res.status(500).json({ error: 'Error eliminando credencial' });
    }
});
/**
 * POST /api/admin/credenciales/:id/liberar
 * Libera una credencial (marca como disponible, desvincula del vendor).
 */
router.post('/credenciales/:id/liberar', async (req, res) => {
    try {
        const { id } = req.params;
        const credencial = await prisma_1.default.credencial.update({
            where: { id },
            data: { disponible: true, asignada_a: null, pedido_id: null },
        });
        res.json({ message: 'Credencial liberada', credencial });
    }
    catch (error) {
        res.status(500).json({ error: 'Error liberando credencial' });
    }
});
/**
 * POST /api/admin/pedidos/:id/aprobar
 * Aprueba un pedido y asigna N credenciales disponibles al vendor automáticamente.
 */
router.post('/pedidos/:id/aprobar', async (req, res) => {
    try {
        const { id } = req.params;
        const { respuesta_admin } = req.body;
        // Obtener el pedido
        const pedido = await prisma_1.default.pedido.findUnique({
            where: { id },
            include: { servicio: true, vendor: true },
        });
        if (!pedido) {
            res.status(404).json({ error: 'Pedido no encontrado' });
            return;
        }
        // Buscar credenciales disponibles para este servicio
        const disponibles = await prisma_1.default.credencial.findMany({
            where: { servicio_id: pedido.servicio_id, disponible: true },
            take: pedido.cantidad,
        });
        if (disponibles.length < pedido.cantidad) {
            res.status(400).json({
                error: `Solo hay ${disponibles.length} credenciales disponibles, se necesitan ${pedido.cantidad}`,
                disponibles: disponibles.length,
                requeridas: pedido.cantidad,
            });
            return;
        }
        // Asignar las credenciales
        const credIds = disponibles.map(c => c.id);
        await prisma_1.default.credencial.updateMany({
            where: { id: { in: credIds } },
            data: { disponible: false, asignada_a: pedido.vendor_id, pedido_id: pedido.id },
        });
        // Construir respuesta con credenciales
        const credencialesTexto = disponibles
            .map((c, i) => `📧 Cuenta ${i + 1}:\nUsuario: ${c.usuario}\nContraseña: ${c.password}${c.perfil ? `\nPerfil: ${c.perfil}` : ''}`)
            .join('\n\n');
        const respuestaFinal = respuesta_admin
            ? `${respuesta_admin}\n\n${credencialesTexto}`
            : credencialesTexto;
        // Actualizar el pedido
        const updatedPedido = await prisma_1.default.pedido.update({
            where: { id },
            data: {
                status: 'COMPLETADO',
                respuesta_admin: respuestaFinal,
                respondido_en: new Date(),
            },
            include: {
                vendor: { select: { alias: true } },
                servicio: { select: { nombre: true } },
                credenciales: true,
            },
        });
        // Notificar al vendedor
        try {
            await onesignal_1.OneSignal.sendSystemNotification(pedido.vendor_id, '✅ Pedido Aprobado', `Tu pedido de ${pedido.cantidad} ${pedido.servicio?.nombre || 'cuenta(s)'} fue aprobado. Revisa tus credenciales.`);
        }
        catch (e) {
            console.error('Push error:', e);
        }
        res.json({
            message: `Pedido aprobado: ${credIds.length} credenciales asignadas`,
            pedido: updatedPedido,
            credenciales_asignadas: disponibles.length,
        });
    }
    catch (error) {
        console.error('Error aprobando pedido:', error);
        res.status(500).json({ error: 'Error aprobando pedido' });
    }
});
exports.default = router;
//# sourceMappingURL=admin.js.map