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

import { upload, getFileUrl } from '../lib/cloudinary';

const router = Router();

// Ruta exenta de guard de Proveedor para que los compradores puedan ver el QR
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
      } as any
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

/**
 * GET /api/marketplace
 * Lista todos los servicios aprobados de proveedores externos.
 * Accesible para todos los vendedores (compradores).
 */
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const marketplace = await prisma.servicioBase.findMany({
      where: {
        proveedor_id: { not: null },
        estado_aprobacion: 'APROBADO',
        activo: true,
      },
      include: {
        proveedor: {
          select: { nombre: true, alias: true, whatsapp: true, logo_url: true, rating: true }
        }
      },
      orderBy: { nombre: 'asc' }
    });

    // Calcular stock dinámicamente
    const withStock = await Promise.all(marketplace.map(async (s) => {
      const stock = await prisma.credencial.count({
        where: { servicio_id: s.id, disponible: true, asignada_a: null }
      });
      return { ...s, stock };
    }));

    res.json(withStock);
  } catch (error) {
    res.status(500).json({ error: 'Error cargando marketplace' });
  }
});

/**
 * GET /api/marketplace/proveedor/:id
 * Obtiene el catálogo detallado de un proveedor específico.
 * Accesible para todos los vendedores (compradores).
 */
router.get('/proveedor/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params as { id: string };
    const catálogo = await prisma.miServicio.findMany({
      where: { 
        vendor_id: id, 
        activo: true,
        servicio: { estado_aprobacion: 'APROBADO' } as any
      },
      include: { servicio: true }
    });

    // Calcular stock dinámicamente para cada servicio base
    const withStock = await Promise.all(catálogo.map(async (ms: any) => {
      const stock = await prisma.credencial.count({
        where: { servicio_id: ms.servicio_id, disponible: true, asignada_a: null }
      });
      return { 
        ...ms, 
        stock, 
        servicio: { ...ms.servicio, stock } 
      };
    }));

    res.json(withStock);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo catálogo del proveedor' });
  }
});

// NOTA: No usamos router.use(planGuard('Proveedor')) globalmente para no bloquear rutas de consulta pública de compradores.
// Aplicamos el guard de forma granular a cada ruta.

/**
 * GET /api/marketplace/mine
 * Lista los servicios propuestos por el proveedor actual.
 */
router.get('/mine', planGuard('Proveedor'), async (req: Request, res: Response): Promise<void> => {
  try {
    const servicios = await prisma.servicioBase.findMany({
      where: { proveedor_id: req.vendor!.id },
      orderBy: { nombre: 'asc' }
    });

    const withStock = await Promise.all(servicios.map(async (s) => {
      const available = await prisma.credencial.count({
        where: { servicio_id: s.id, disponible: true, asignada_a: null }
      });
      const total = await prisma.credencial.count({
        where: { servicio_id: s.id }
      });
      const leads = await prisma.miServicio.count({
        where: { servicio_id: s.id }
      });
      return { ...s, stock: available, total_credenciales: total, leads };
    }));

    res.json(withStock);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo servicios propuestos' });
  }
});

/**
 * POST /api/marketplace/propose
 * Crea un nuevo servicio base (propuesta).
 * Se marca automáticamente como APROBADO por defecto en el modelo.
 */
router.post('/propose', planGuard('Proveedor'), upload.single('logo'), async (req: Request, res: Response): Promise<void> => {
  try {
    const { nombre, descripcion, precio_costo, icono_url, categoria } = req.body;
    const file = req.file;

    if (!nombre || !precio_costo) {
      res.status(400).json({ error: 'Nombre y precio son requeridos' });
      return;
    }

    const finalLogoUrl = file ? getFileUrl(file) : (icono_url || '');

    const servicio = await prisma.servicioBase.create({
      data: {
        nombre,
        descripcion_base: descripcion || '',
        precio_admin: parseFloat(precio_costo),
        precio_sugerido: parseFloat(precio_costo) * 1.2, // Sugerir un 20% más
        logo_url: finalLogoUrl,
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
router.get('/pedidos', planGuard('Proveedor'), async (req: Request, res: Response): Promise<void> => {
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
router.post('/credenciales', planGuard('Proveedor'), async (req: Request, res: Response): Promise<void> => {
  try {
    const { servicio_id, email, password, pedido_id, notas, perfil, respuesta_admin } = req.body;

    // Si viene respuesta_admin (formato Master), priorizamos completar el pedido directamente
    if (pedido_id && (respuesta_admin || (email && password))) {
        const textToSave = respuesta_admin || `Usuario: ${email}\nPassword: ${password}${perfil ? `\nPerfil: ${perfil}` : ''}${notas ? `\nNotas: ${notas}` : ''}`;
        
        await prisma.pedido.update({
            where: { id: pedido_id },
            data: { 
                status: 'COMPLETADO', 
                respuesta_admin: textToSave,
                respondido_en: new Date() 
            }
        });

        res.status(201).json({ message: 'Pedido completado con respuesta maestra' });
        return;
    }

    // Validación para carga de credenciales tradicional (inventario)
    if (!pedido_id && (!servicio_id || !email || !password)) {
      res.status(400).json({ error: 'Servicio, email y password son requeridos para credenciales de inventario' });
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
      } as any
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
 * PATCH /api/marketplace/pedidos/:id
 * Permite al proveedor actualizar el estado de un pedido (PENDIENTE -> EN_PROCESO -> CANCELADO).
 */
router.patch('/pedidos/:id', planGuard('Proveedor'), async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { status, respuesta_admin } = req.body;

    // Verificar que el pedido pertenezca a un servicio del proveedor
    const pedido = await prisma.pedido.findUnique({
      where: { id: id as string },
      include: { servicio: true }
    });

    if (!pedido || !pedido.servicio || (pedido.servicio.proveedor_id !== req.vendor!.id && req.vendor!.role !== 'SUPERADMIN')) {
      res.status(403).json({ error: 'No tienes permiso para gestionar este pedido' });
      return;
    }

    const updated = await prisma.pedido.update({
      where: { id: id as string },
      data: { 
        status,
        ...(respuesta_admin && { respuesta_admin, respondido_en: new Date() })
      }
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Error actualizando estado del pedido' });
  }
});

router.get('/credenciales', planGuard('Proveedor'), async (req: Request, res: Response): Promise<void> => {
  try {
    const credenciales = await prisma.credencial.findMany({
      where: { provider_id: req.vendor!.id } as any,
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
 * GET /api/marketplace/vendedores
 * Lista reducida de vendedores para el buscador de asignación manual.
 */
router.get('/vendedores', planGuard('Proveedor'), async (_req: Request, res: Response): Promise<void> => {
  try {
    const vendors = await prisma.vendor.findMany({
      where: { 
        status: 'ACTIVE',
        role: { not: 'SUPERADMIN' }
      },
      select: { id: true, nombre: true, alias: true },
      orderBy: { nombre: 'asc' }
    });
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo vendedores' });
  }
});

/**
 * POST /api/marketplace/credenciales/:id/asignar
 * Asigna manualmente una credencial a un vendedor.
 */
router.post('/credenciales/:id/asignar', planGuard('Proveedor'), async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { vendor_id } = req.body;

    const credencial = await prisma.credencial.findUnique({ where: { id: id as string } }) as any;
    if (!credencial || (credencial.provider_id !== req.vendor!.id && req.vendor!.role !== 'SUPERADMIN')) {
      res.status(403).json({ error: 'No tienes permiso para gestionar esta credencial' });
      return;
    }

    const updated = await prisma.credencial.update({
      where: { id: id as string },
      data: {
        asignada_a: vendor_id,
        disponible: false
      }
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Error asignando credencial' });
  }
});

/**
 * POST /api/marketplace/credenciales/:id/liberar
 * Libera una credencial asignada.
 */
router.post('/credenciales/:id/liberar', planGuard('Proveedor'), async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const credencial = await prisma.credencial.findUnique({ where: { id: id as string } }) as any;
    if (!credencial || (credencial.provider_id !== req.vendor!.id && req.vendor!.role !== 'SUPERADMIN')) {
      res.status(403).json({ error: 'No tienes permiso para gestionar esta credencial' });
      return;
    }

    const updated = await prisma.credencial.update({
      where: { id: id as string },
      data: {
        asignada_a: null,
        disponible: true
      }
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Error liberando credencial' });
  }
});

// (Removido de aquí, movido arriba del guard)

/**
 * PUT /api/marketplace/service/:id
 * Permite al proveedor editar su propuesta de servicio.
 */
router.put('/service/:id', planGuard('Proveedor'), upload.single('logo'), async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;
    const { nombre, descripcion, precio_costo, icono_url, categoria, activo } = req.body;
    const file = req.file;

    const existing = await prisma.servicioBase.findUnique({ where: { id } });
    if (!existing || (existing.proveedor_id !== req.vendor!.id && req.vendor!.role !== 'SUPERADMIN')) {
      res.status(403).json({ error: 'No tienes permiso para editar este servicio' });
      return;
    }

    const finalLogoUrl = file ? getFileUrl(file) : (icono_url || existing.logo_url);

    const updated = await prisma.servicioBase.update({
      where: { id },
      data: {
        nombre: nombre || existing.nombre,
        descripcion_base: descripcion !== undefined ? descripcion : existing.descripcion_base,
        precio_admin: precio_costo ? parseFloat(precio_costo) : existing.precio_admin,
        logo_url: finalLogoUrl,
        categoria: categoria || existing.categoria,
        activo: activo !== undefined ? (activo === 'true' || activo === true) : existing.activo
      }
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Error actualizando servicio' });
  }
});

/**
 * DELETE /api/marketplace/service/:id
 * Elimina o desactiva un servicio.
 */
router.delete('/service/:id', planGuard('Proveedor'), async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;

    const existing = await prisma.servicioBase.findUnique({ where: { id } });
    if (!existing || (existing.proveedor_id !== req.vendor!.id && req.vendor!.role !== 'SUPERADMIN')) {
      res.status(403).json({ error: 'No tienes permiso para eliminar este servicio' });
      return;
    }

    // Si tiene pedidos, mejor desactivarlo que borrarlo
    const hasOrders = await prisma.pedido.count({ where: { servicio_id: id } });
    if (hasOrders > 0) {
      await prisma.servicioBase.update({
        where: { id },
        data: { activo: false }
      });
      res.json({ message: 'Servicio desactivado por tener pedidos previos', inactive: true });
    } else {
      await prisma.servicioBase.delete({ where: { id } });
      res.json({ message: 'Servicio eliminado correctamente', deleted: true });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error eliminando servicio' });
  }
});

/**
 * PUT /api/marketplace/credenciales/:id
 * El proveedor edita una de sus credenciales.
 */
router.put('/credenciales/:id', planGuard('Proveedor'), async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { usuario, password, perfil, notas, disponible } = req.body;

    const existing = await prisma.credencial.findUnique({ where: { id: id as string } }) as any;
    if (!existing || (existing.provider_id !== req.vendor!.id && req.vendor!.role !== 'SUPERADMIN')) {
      res.status(403).json({ error: 'No tienes permiso para editar esta credencial' });
      return;
    }

    const updated = await prisma.credencial.update({
      where: { id: id as string },
      data: {
        usuario: usuario || existing.usuario,
        password: password || existing.password,
        perfil: perfil !== undefined ? perfil : existing.perfil,
        notas: notas !== undefined ? notas : existing.notas,
        disponible: disponible !== undefined ? disponible : existing.disponible,
      }
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Error actualizando credencial' });
  }
});

/**
 * DELETE /api/marketplace/credenciales/:id
 * El proveedor elimina una de sus credenciales.
 */
router.delete('/credenciales/:id', planGuard('Proveedor'), async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const existing = await prisma.credencial.findUnique({ where: { id: id as string } }) as any;
    if (!existing || (existing.provider_id !== req.vendor!.id && req.vendor!.role !== 'SUPERADMIN')) {
      res.status(403).json({ error: 'No tienes permiso para eliminar esta credencial' });
      return;
    }

    await prisma.credencial.delete({ where: { id: id as string } });
    res.json({ message: 'Credencial eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error eliminando credencial' });
  }
});

export default router;
