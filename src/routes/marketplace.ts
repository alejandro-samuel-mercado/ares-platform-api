/**
 * Rutas: Marketplace (Gestión de Proveedores)
 * 
 * Permite a los vendedores con plan Proveedor:
 * - Proponer servicios (publicación automática).
 * - Ver pedidos de sus servicios.
 * - Gestionar credenciales para sus servicios.
 */

import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma';
import { planGuard } from '../middleware/planGuard';

const router = Router();

// Todas las rutas de este archivo requieren plan Proveedor (o SuperAdmin)
router.use(planGuard('Proveedor'));

/**
 * GET /api/marketplace/mine
 * Lista los servicios propuestos por el proveedor actual.
 */
router.get('/mine', async (req: Request, res: Response): Promise<void> => {
  try {
    const servicios = await prisma.servicioBase.findMany({
      where: { proveedor_id: req.vendor!.id },
      include: {
        _count: { select: { credenciales: true, clicks: true } }
      },
      orderBy: { nombre: 'asc' }
    });
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo servicios propuestos' });
  }
});

/**
 * POST /api/marketplace/propose
 * Crea un nuevo servicio base (propuesta).
 * Se marca automáticamente como APROBADO por defecto en el modelo.
 */
router.post('/propose', async (req: Request, res: Response): Promise<void> => {
  try {
    const { nombre, descripcion, precio_costo, icono_url, categoria } = req.body;

    if (!nombre || !precio_costo) {
      res.status(400).json({ error: 'Nombre y precio son requeridos' });
      return;
    }

    const servicio = await prisma.servicioBase.create({
      data: {
        nombre,
        descripcion_base: descripcion || '',
        precio_admin: parseFloat(precio_costo),
        precio_sugerido: parseFloat(precio_costo) * 1.2, // Sugerir un 20% más
        logo_url: icono_url || '',
        categoria: categoria || 'OTROS',
        proveedor_id: req.vendor!.id,
        estado_aprobacion: 'APROBADO', // Publicación automática
        activo: true
      }
    });

    res.status(201).json(servicio);
  } catch (error) {
    res.status(500).json({ error: 'Error al proponer servicio' });
  }
});

/**
 * GET /api/marketplace/pedidos
 * Lista los pedidos recibidos para los servicios de este proveedor.
 */
router.get('/pedidos', async (req: Request, res: Response): Promise<void> => {
  try {
    const pedidos = await prisma.pedido.findMany({
      where: {
        servicio: {
          proveedor_id: req.vendor!.id
        }
      },
      include: {
        vendor: {
          select: { id: true, nombre: true, alias: true, telefono: true }
        },
        servicio: true,
        credenciales: true
      },
      orderBy: { creado_en: 'desc' }
    });
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo pedidos recibidos' });
  }
});

/**
 * POST /api/marketplace/credenciales
 * El proveedor sube credenciales para uno de sus servicios, 
 * opcionalmente vinculada a un pedido.
 */
router.post('/credenciales', async (req: Request, res: Response): Promise<void> => {
  try {
    const { servicio_id, email, password, pedido_id, notas, perfil } = req.body;

    if (!servicio_id || !email || !password) {
      res.status(400).json({ error: 'Servicio, email y password son requeridos' });
      return;
    }

    // Verificar que el servicio pertenezca al proveedor
    const servicio = await prisma.servicioBase.findUnique({
      where: { id: servicio_id }
    });

    if (!servicio || (servicio.proveedor_id !== req.vendor!.id && req.vendor!.role !== 'SUPERADMIN')) {
      res.status(403).json({ error: 'No tienes permiso para gestionar este servicio' });
      return;
    }

    // Si hay pedido_id, verificar que el pedido sea de este servicio
    let asignadaAId = null;
    if (pedido_id) {
      const pedido = await prisma.pedido.findUnique({ where: { id: pedido_id } });
      if (pedido && pedido.servicio_id === servicio_id) {
        asignadaAId = pedido.vendor_id;
      }
    }

    const credencial = await prisma.credencial.create({
      data: {
        servicio_id,
        usuario: email,
        password,
        perfil: perfil || '',
        pedido_id: pedido_id || null,
        asignada_a: asignadaAId,
        provider_id: req.vendor!.id,
        disponible: asignadaAId ? false : true,
        notas: notas || ''
      }
    });

    // Si se asignó a un pedido, marcar el pedido como completado
    if (pedido_id) {
       await prisma.pedido.update({
         where: { id: pedido_id },
         data: { status: 'COMPLETADO', respondido_en: new Date() }
       });
    }

    res.status(201).json(credencial);
  } catch (error) {
    res.status(500).json({ error: 'Error guardando credenciales' });
  }
});

/**
 * GET /api/marketplace/credenciales
 * Obtiene el inventario completo de credenciales subidas por el proveedor.
 */
router.get('/credenciales', async (req: Request, res: Response): Promise<void> => {
  try {
    const credenciales = await prisma.credencial.findMany({
      where: { provider_id: req.vendor!.id },
      include: {
        servicio: { select: { nombre: true, logo_url: true } },
        vendor: { select: { alias: true } }
      },
      orderBy: { creado_en: 'desc' }
    });
    res.json(credenciales);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo inventario' });
  }
});

/**
 * GET /api/marketplace/proveedor/:id/pagos
 * Obtiene los métodos de pago (QR, Tigo) de un proveedor para mostrar en pedidos.
 */
router.get('/proveedor/:id/pagos', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const provider = await prisma.vendor.findUnique({
      where: { id: id as string },
      select: { 
        qr_bob: true, 
        qr_usd: true, 
        tigo_money: true,
        alias: true,
        nombre: true
      }
    });

    if (!provider) {
      res.status(404).json({ error: 'Proveedor no encontrado' });
      return;
    }

    res.json(provider);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo datos del proveedor' });
  }
});

export default router;
