/**
 * Rutas: Vendor (App Vendedor PWA)
 *
 * Endpoints para la app del vendedor:
 * - Mi Catálogo (servicios activos)
 * - Imágenes (lista + descarga)
 * - Mensajes Rápidos
 * - Partidos
 * - Perfil
 * - Pagos (subir comprobante)
 *
 * Todas las rutas requieren autenticación + suscripción activa.
 * Todas las queries filtran por vendor_id del JWT (multi-tenant).
 */

import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma';
import { OneSignal } from '../lib/onesignal';
import { planGuard } from '../middleware/planGuard';
import { applyWatermark } from '../lib/watermark';
import { upload, getFileUrl } from '../lib/cloudinary';

const router = Router();

// ═══════════════════════════════════════════
// SERVICIOS BASE (Catálogo maestro)
// ═══════════════════════════════════════════

/**
 * GET /api/servicios_base
 * Lista todos los servicios base activos del sistema.
 */
router.get('/servicios_base', async (req: Request, res: Response): Promise<void> => {
  try {
    const servicios = await prisma.servicioBase.findMany({
      where: { activo: true },
      orderBy: { nombre: 'asc' },
    });
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo servicios base' });
  }
});

// ═══════════════════════════════════════════
// MIS SERVICIOS (Catálogo del vendedor)
// ═══════════════════════════════════════════

/**
 * GET /api/mis_servicios
 * Lista los servicios que el vendedor tiene activados con sus precios.
 * Filtrado obligatorio por vendor_id del JWT.
 */
router.get('/mis_servicios', async (req: Request, res: Response): Promise<void> => {
  try {
    const servicios = await prisma.miServicio.findMany({
      where: { vendor_id: req.vendor!.id },
      include: { servicio: true },
      orderBy: { creado_en: 'desc' },
    });
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo mis servicios' });
  }
});

/**
 * POST /api/mis_servicios
 * Activa un servicio en el catálogo del vendedor (sin precio, solo selección).
 */
router.post('/mis_servicios', async (req: Request, res: Response): Promise<void> => {
  try {
    const vendor = req.vendor!;
    const { servicio_id } = req.body;

    if (!servicio_id) {
      res.status(400).json({ error: 'servicio_id es requerido' });
      return;
    }

    const servicioBase = await prisma.servicioBase.findFirst({
      where: { id: servicio_id, activo: true },
    });

    if (!servicioBase) {
      res.status(404).json({ error: 'Servicio no encontrado o no disponible' });
      return;
    }

    // Verificar límite del plan
    if (vendor.plan.limite_servicios !== null) {
      const count = await prisma.miServicio.count({
        where: { vendor_id: vendor.id, activo: true },
      });

      if (count >= vendor.plan.limite_servicios) {
        res.status(403).json({
          error: 'Límite de servicios alcanzado',
          reason: 'plan_limit_reached',
          limit: vendor.plan.limite_servicios,
          current_plan: vendor.plan.nombre,
          message: `Tu plan ${vendor.plan.nombre} permite máximo ${vendor.plan.limite_servicios} servicios activos.`,
        });
        return;
      }
    }

    const existing = await prisma.miServicio.findFirst({
      where: { vendor_id: vendor.id, servicio_id },
    });

    if (existing) {
      if (!existing.activo) {
        const updated = await prisma.miServicio.update({
          where: { id: existing.id },
          data: { activo: true },
          include: { servicio: true },
        });
        res.json(updated);
        return;
      }
      res.status(409).json({ error: 'Este servicio ya está activado en tu catálogo' });
      return;
    }

    const miServicio = await prisma.miServicio.create({
      data: { vendor_id: vendor.id, servicio_id },
      include: { servicio: true },
    });

    res.status(201).json(miServicio);
  } catch (error) {
    console.error('Error activando servicio:', error);
    res.status(500).json({ error: 'Error activando servicio' });
  }
});

/**
 * DELETE /api/mis_servicios/:id
 * Desactiva un servicio del catálogo del vendedor (soft delete).
 */
router.delete('/mis_servicios/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params as { id: string };

    const servicio = await prisma.miServicio.findFirst({
      where: { id, vendor_id: req.vendor!.id },
    });

    if (!servicio) {
      res.status(404).json({ error: 'Servicio no encontrado' });
      return;
    }

    await prisma.miServicio.update({
      where: { id: id as string },
      data: { activo: false },
    });

    res.json({ message: 'Servicio desactivado' });
  } catch (error) {
    res.status(500).json({ error: 'Error desactivando servicio' });
  }
});

// ═══════════════════════════════════════════
// IMÁGENES
// ═══════════════════════════════════════════

/**
 * GET /api/imagenes
 * Lista imágenes activas filtradas por el catálogo del vendedor.
 * Solo muestra imágenes vinculadas a servicios que el vendedor tiene activos,
 * o imágenes globales (sin servicio_id).
 * Query param: ?etiqueta=Netflix (filtro adicional por etiqueta)
 */
router.get('/imagenes', async (req: Request, res: Response): Promise<void> => {
  try {
    const { etiqueta } = req.query as { etiqueta?: string };
    const vendorId = req.vendor!.id;

    // Obtener los IDs de servicios activos del vendedor
    const misServicios = await prisma.miServicio.findMany({
      where: { vendor_id: vendorId, activo: true },
      select: { servicio_id: true },
    });
    const servicioIds = misServicios.map(s => s.servicio_id);

    // Buscar imágenes: globales (sin servicio) + las de sus servicios activos
    const imagenes = await prisma.imagen.findMany({
      where: {
        activo: true,
        ...(etiqueta ? { etiquetas: { contains: etiqueta as string } } : {}),
        OR: [
          { servicio_id: null },                              // Imágenes globales
          { servicio_id: { in: servicioIds } },                // Imágenes de su catálogo
        ],
      },
      include: {
        servicio: { select: { id: true, nombre: true, logo_url: true } }
      },
      orderBy: { creado_en: 'desc' },
    });

    res.json(imagenes);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo imágenes' });
  }
});

/**
 * GET /api/imagen/:id/download
 * 
 * Descarga una imagen con marca de agua distribuida del vendedor.
 * 
 * Lógica:
 * 1. Busca la imagen en el banco.
 * 2. Obtiene los datos del vendor (logo/alias).
 * 3. Aplica marca de agua usando Sharp.
 * 4. Retorna el buffer de imagen directamente.
 */
router.get('/imagen/:id/download', async (req: Request, res: Response): Promise<void> => {
  try {
    const vendor = req.vendor!;
    const { id } = req.params as { id: string };

    const imagen = await prisma.imagen.findFirst({
      where: { id: id as string, activo: true },
    });

    if (!imagen) {
      res.status(404).json({ error: 'Imagen no encontrada' });
      return;
    }

    const isGuest = vendor.role === 'GUEST';
    
    // Determinar qué marca de agua usar
    // Si es GUEST, siempre dice DEMO. Si es VENDOR, usa su alias.
    const watermarkText = isGuest ? 'ARES DEMO' : (vendor.alias || vendor.nombre).toUpperCase();
    const logoUrl = isGuest ? undefined : (vendor.logo_url || undefined);
    const whatsapp = isGuest ? undefined : (vendor.whatsapp || undefined);

    // Procesar imagen con Sharp
    const processedImage = await applyWatermark(imagen.url_base, watermarkText, logoUrl, whatsapp);

    // Configurar headers para descarga
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Content-Disposition', `attachment; filename="ares_${imagen.titulo.replace(/\s+/g, '_')}.png"`);
    
    res.send(processedImage);
  } catch (error) {
    console.error('Error generating watermarked image:', error);
    res.status(500).json({ error: 'Error procesando la imagen con marca de agua' });
  }
});

// ═══════════════════════════════════════════
// MENSAJES RÁPIDOS
// ═══════════════════════════════════════════

/**
 * GET /api/mensajes
 * Lista mensajes rápidos activos ordenados por campo 'orden'.
 */
router.get('/mensajes', async (req: Request, res: Response): Promise<void> => {
  try {
    const mensajes = await prisma.mensajeRapido.findMany({
      where: { activo: true },
      orderBy: { orden: 'asc' },
    });
    res.json(mensajes);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo mensajes' });
  }
});

// ═══════════════════════════════════════════
// PARTIDOS
// ═══════════════════════════════════════════

/**
 * GET /api/partidos
 * Lista partidos activos. Filtro: ?fecha=hoy
 */
router.get('/partidos', async (req: Request, res: Response): Promise<void> => {
  try {
    const { fecha } = req.query as { fecha?: string };
    let whereClause: any = { activo: true };

    if (fecha === 'hoy') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      whereClause = {
        ...whereClause,
        fecha: {
          gte: today,
          lt: tomorrow,
        },
      };
    }

    const partidos = await prisma.partido.findMany({
      where: whereClause,
      orderBy: { fecha: 'asc' },
    });

    res.json(partidos);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo partidos' });
  }
});

// ═══════════════════════════════════════════
// PEDIDOS — Solicitar credenciales
// ═══════════════════════════════════════════

/**
 * POST /api/pedidos
 * Crea un pedido de credenciales con cantidad y comprobante de pago.
 */
router.post('/pedidos', async (req: Request, res: Response): Promise<void> => {
  try {
    const vendor = req.vendor!;
    const { servicio_id, cantidad, notas, comprobante_url } = req.body;

    if (!servicio_id) {
      res.status(400).json({ error: 'servicio_id es requerido' });
      return;
    }

    const cantidadFinal = parseInt(cantidad) || 1;

    const pedido = await prisma.pedido.create({
      data: {
        vendor_id: vendor.id,
        servicio_id,
        cantidad: cantidadFinal,
        comprobante_url: comprobante_url || null,
        notas: notas || null,
      },
      include: { servicio: { select: { nombre: true, precio_admin: true } } },
    });

    // Notificar al admin sobre nuevo pedido
    try {
      const { OneSignal } = await import('../lib/onesignal');
      await OneSignal.sendNotification({
        headings: { es: '📦 Nuevo Pedido Recibido', en: '📦 New Order Received' },
        contents: { 
          es: `@${vendor.alias} pidió ${cantidadFinal}x ${pedido.servicio?.nombre || 'servicio'}. Comprobante: ${comprobante_url ? 'Sí' : 'No'}.`,
          en: `@${vendor.alias} ordered ${cantidadFinal}x. Receipt: ${comprobante_url ? 'Yes' : 'No'}.`
        },
        filters: [{ field: 'tag', key: 'role', relation: '=', value: 'SUPERADMIN' }]
      });
    } catch (err) {
      console.error('OneSignal Error:', err);
    }

    res.status(201).json({
      message: 'Pedido creado. El administrador lo procesará pronto.',
      pedido,
      monto_total: cantidadFinal * (pedido.servicio?.precio_admin || 0),
    });
  } catch (error) {
    res.status(500).json({ error: 'Error creando pedido' });
  }
});

/**
 * GET /api/mis_credenciales
 * Lista todas las credenciales asignadas al vendor, agrupadas por servicio.
 */
router.get('/mis_credenciales', async (req: Request, res: Response): Promise<void> => {
  try {
    const credenciales = await prisma.credencial.findMany({
      where: { asignada_a: req.vendor!.id },
      include: {
        servicio: { select: { id: true, nombre: true, logo_url: true, categoria: true } },
      },
      orderBy: { creado_en: 'desc' },
    });
    res.json(credenciales);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo credenciales' });
  }
});

/**
 * GET /api/pedidos
 * Lista pedidos del vendedor autenticado (requiere Plan Pro).
 */
router.get('/pedidos', async (req: Request, res: Response): Promise<void> => {
  try {
    const pedidos = await prisma.pedido.findMany({
      where: { vendor_id: req.vendor!.id },
      include: { servicio: { select: { nombre: true, logo_url: true, categoria: true } } },
      orderBy: { creado_en: 'desc' },
    });
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo pedidos' });
  }
});

// ═══════════════════════════════════════════
// PERFIL
// ═══════════════════════════════════════════

/**
 * GET /api/perfil
 * Datos del vendedor autenticado con su plan.
 */
router.get('/perfil', async (req: Request, res: Response): Promise<void> => {
  try {
    const vendor = req.vendor!;
    res.json({
      id: vendor.id,
      nombre: vendor.nombre,
      alias: vendor.alias,
      telefono: vendor.telefono,
      whatsapp: vendor.whatsapp,
      logo_url: vendor.logo_url,
      plan: vendor.plan.nombre,
      texto_limite: (vendor as any).plan?.texto_limite,
      plan_id: vendor.plan_id,
      role: vendor.role,
      status: vendor.status,
      rating: vendor.rating,
      biografia: vendor.biografia,
      whatsapp_api_enabled: vendor.whatsapp_api_enabled,
      whatsapp_api_token: vendor.whatsapp_api_token,
      fecha_registro: vendor.fecha_registro,
      fecha_vencimiento: vendor.fecha_vencimiento,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo perfil' });
  }
});

/**
 * PUT /api/perfil
 * Actualiza logo, WhatsApp y alias del vendedor.
 */
router.put('/perfil', async (req: Request, res: Response): Promise<void> => {
  try {
    const vendor = req.vendor!;
    const { 
      whatsapp, alias, nombre, logo_url, logo_cloudinary_id, biografia,
      whatsapp_api_enabled, whatsapp_api_token 
    } = req.body;

    // Verificar que el nuevo alias no esté en uso
    if (alias && alias !== vendor.alias) {
      const existing = await prisma.vendor.findFirst({
        where: { alias: alias.toLowerCase(), id: { not: vendor.id } },
      });
      if (existing) {
        res.status(409).json({ error: 'Ese alias ya está en uso' });
        return;
      }
    }

    const updated = await prisma.vendor.update({
      where: { id: vendor.id },
      data: {
        ...(whatsapp !== undefined && { whatsapp }),
        ...(alias !== undefined && { alias: alias.toLowerCase() }),
        ...(nombre !== undefined && { nombre }),
        ...(logo_url !== undefined && { logo_url }),
        ...(logo_cloudinary_id !== undefined && { logo_cloudinary_id }),
        ...(biografia !== undefined && { biografia }),
        ...(whatsapp_api_enabled !== undefined && { whatsapp_api_enabled }),
        ...(whatsapp_api_token !== undefined && { whatsapp_api_token }),
      },
      include: { plan: true },
    });

    res.json({
      message: 'Perfil actualizado',
      vendor: {
        id: updated.id,
        nombre: updated.nombre,
        alias: updated.alias,
        whatsapp: updated.whatsapp,
        logo_url: updated.logo_url,
        plan: updated.plan.nombre,
        texto_limite: updated.plan.texto_limite,
        biografia: updated.biografia,
        rating: updated.rating,
        whatsapp_api_enabled: updated.whatsapp_api_enabled,
        whatsapp_api_token: updated.whatsapp_api_token,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Error actualizando perfil' });
  }
});

// ═══════════════════════════════════════════
// PAGOS (Subir comprobante)
// ═══════════════════════════════════════════

/**
 * GET /api/pagos
 * Obtiene los pagos del vendedor (para ver si tiene pagos pendientes)
 */
router.get('/pagos', async (req: Request, res: Response) => {
  try {
    const pagos = await prisma.pago.findMany({
      where: { vendor_id: req.vendor!.id },
      orderBy: { creado_en: 'desc' }
    });
    res.json(pagos);
  } catch (error) {
    console.error('Error fetching pagos:', error);
    res.status(500).json({ error: 'Error fetching pagos' });
  }
});

/**
 * POST /api/pagos/comprobante
 * Sube un comprobante de pago para que el admin lo confirme.
 *
 * Nota: Este endpoint NO requiere suscripción activa
 * (se exime del subscriptionMiddleware en index.ts)
 */
router.post('/pagos/comprobante', upload.single('comprobante'), async (req: Request, res: Response): Promise<void> => {
  try {
    const vendor = req.vendor!;
    const { monto, plan_id, comprobante_url } = req.body;
    const file = req.file as any;

    if (!monto || !plan_id) {
      res.status(400).json({ error: 'monto y plan_id son requeridos' });
      return;
    }

    const final_comprobante_url = file ? getFileUrl(file) : (comprobante_url || null);

    const pago = await prisma.pago.create({
      data: {
        vendor_id: vendor.id,
        monto: parseFloat(monto),
        plan_id,
        comprobante_url: final_comprobante_url,
      },
    });

    // Notificar al admin sobre nuevo pago
    try {
      OneSignal.sendNotification({
        headings: { es: '💰 Nuevo Pago Recibido', en: '💰 New Payment Received' },
        contents: { 
          es: `El vendedor @${vendor.alias} ha subido un comprobante de $${monto}.`,
          en: `Vendor @${vendor.alias} uploaded a receipt for $${monto}.`
        },
        segments: ['Admins']
      });
    } catch (err) { console.error('OneSignal error:', err); }

    res.status(201).json({
      message: 'Comprobante enviado. El administrador lo revisará pronto.',
      pago,
    });
  } catch (error) {
    console.error('Error enviando comprobante:', error);
    res.status(500).json({ error: 'Error enviando comprobante' });
  }
});

/**
 * GET /api/ajustes-publicos
 * Datos públicos de la plataforma (QR de pago, nombre, etc.)
 * Accesible sin autenticación para la pantalla de renovación.
 */
router.get('/ajustes-publicos', async (_req: Request, res: Response): Promise<void> => {
  try {
    const ajustes = await prisma.ajustesPlataforma.findUnique({
      where: { id: '1' },
    });

    res.json({
      qr_cobro_url: ajustes?.qr_cobro_url || '',
      tigo_money_numero: ajustes?.tigo_money_numero || '',
      nombre_plataforma: ajustes?.nombre_plataforma || 'Ares',
      logo_url: ajustes?.logo_url || '',
    });
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo ajustes' });
  }
});

// ═══════════════════════════════════════════
// MARKETPLACE B2B (Servicios de Proveedores)
// ═══════════════════════════════════════════



/**
 * GET /api/marketplace
 * Lista todos los servicios aprobados de proveedores externos.
 */
router.get('/marketplace', async (_req: Request, res: Response): Promise<void> => {
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
    res.json(marketplace);
  } catch (error) {
    res.status(500).json({ error: 'Error cargando marketplace' });
  }
});

/**
 * POST /api/marketplace/propose
 * Permite a un vendor con Plan Proveedor proponer un nuevo ServicioBase al Marketplace.
 * El plan "Proveedor" habilita marketplace_proveedor=true.
 */
router.post('/marketplace/propose', async (req: Request, res: Response): Promise<void> => {
  try {
    // Verificar por Plan, no por rol
    if (!req.vendor!.plan.marketplace_proveedor) {
      res.status(403).json({ error: 'Tu plan no incluye la funcionalidad de Marketplace Proveedor' });
      return;
    }

    const { nombre_servicio, descripcion, precio_base, logo_url } = req.body;

    if (!nombre_servicio || !precio_base) {
      res.status(400).json({ error: 'Faltan campos requeridos (nombre_servicio, precio_base)' });
      return;
    }

    const proposal = await prisma.servicioBase.create({
      data: {
        nombre: nombre_servicio,
        descripcion_base: descripcion || '',
        precio_sugerido: parseFloat(precio_base),
        logo_url: logo_url || '',
        categoria: 'IPTV',
        es_iptv_propio: false,
        proveedor_id: req.vendor!.id,
        estado_aprobacion: 'PENDIENTE',
        comision_pct: 10.0,
      } as any
    });

    res.status(201).json({ message: 'Propuesta enviada al administrador', proposal });
  } catch (error) {
    res.status(500).json({ error: 'Error enviando propuesta' });
  }
});

/**
 * GET /api/marketplace/proveedor/:id
 * Obtiene el catálogo detallado de un proveedor específico.
 */
router.get('/marketplace/proveedor/:id', async (req: Request, res: Response): Promise<void> => {
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
    res.json(catálogo);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo catálogo del proveedor' });
  }
});

// ═══════════════════════════════════════════
// ENLACE PUBLICO (GET sin autenticacion)
// ═══════════════════════════════════════════

/**
 * GET /api/public/u/:alias
 * Página pública de un vendor Pro. Sin autenticación.
 * Devuelve el perfil del vendor y sus servicios activos.
 * Solo funciona para vendors con plan PRO.
 *
 * @param alias - El alias del vendor (e.g. "juanventas")
 * @returns { vendor: { nombre, alias, whatsapp, logo_url }, servicios: MiServicio[] }
 */
router.get('/public/u/:alias', async (req: Request, res: Response): Promise<void> => {
  try {
    const alias = req.params.alias as string;

    const vendor = await prisma.vendor.findUnique({
      where: { alias },
      select: {
        id: true,
        nombre: true,
        alias: true,
        whatsapp: true,
        logo_url: true,
        plan_id: true,
      },
    });

    if (!vendor) {
      res.status(404).json({ error: 'Vendedor no encontrado' });
      return;
    }

    // Verificar el plan por separado
    const plan = await prisma.plan.findUnique({ where: { id: vendor.plan_id }, select: { nombre: true } });
    if (!plan || plan.nombre.toUpperCase() !== 'PRO') {
      res.status(403).json({ error: 'Este vendedor no tiene enlace público activo' });
      return;
    }

    const servicios = await prisma.miServicio.findMany({
      where: { vendor_id: vendor.id, activo: true },
      include: {
        servicio: {
          select: { nombre: true, logo_url: true, descripcion_base: true, categoria: true },
        },
      },
      orderBy: { servicio: { nombre: 'asc' } },
    });

    res.json({
      vendor: {
        nombre: vendor.nombre,
        alias: vendor.alias,
        whatsapp: vendor.whatsapp,
        logo_url: vendor.logo_url,
      },
      servicios,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error cargando perfil público del vendedor' });
  }
});

// ═══════════════════════════════════════════
// ESTRENOS (Feed para vendedor)
// ═══════════════════════════════════════════

/**
 * GET /api/estrenos
 * Lista los estrenos activos recientes del feed.
 */
router.get('/estrenos', async (_req: Request, res: Response): Promise<void> => {
  try {
    console.log('📡 HIT: GET /api/estrenos');
    const estrenos = await prisma.estreno.findMany({
      where: { activo: true },
      orderBy: [{ fecha_estreno: 'desc' }, { creado_en: 'desc' }],
      take: 20,
    });
    res.json(estrenos);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo estrenos' });
  }
});

// ═══════════════════════════════════════════
// HISTORIAL DE ACTIVACIONES
// ═══════════════════════════════════════════

/**
 * GET /api/mis_servicios/historial
 * Historial completo de servicios activos e inactivos del vendor.
 */
router.get('/mis_servicios/historial', async (req: Request, res: Response): Promise<void> => {
  try {
    const vendor_id = (req as any).vendor?.id;
    const historial = await prisma.miServicio.findMany({
      where: { vendor_id },
      include: {
        servicio: {
          select: { nombre: true, logo_url: true, categoria: true, descripcion_base: true }
        }
      },
      orderBy: { creado_en: 'desc' },
    });
    res.json(historial);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo historial' });
  }
});

// PAGOS (Subir comprobante) handled at index.ts

export default router;
