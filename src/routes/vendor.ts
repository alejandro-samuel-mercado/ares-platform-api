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

import { Request, Response, Router } from 'express';
import { getFileUrl, upload } from '../lib/cloudinary';
import { OneSignal } from '../lib/onesignal';
import prisma from '../lib/prisma';
import { applyWatermark } from '../lib/watermark';

const router:Router = Router();

// ═══════════════════════════════════════════
// PLANES
// ═══════════════════════════════════════════

/**
 * GET /api/planes
 * Lista todos los planes activos disponibles para el vendedor.
 */
router.get('/planes', async (req: Request, res: Response): Promise<void> => {
  try {
    const planes = await prisma.plan.findMany({
      where: { activo: true },
      orderBy: { precio: 'asc' },
    });
    res.json(planes);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo planes' });
  }
});

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

    const withStock = await Promise.all(servicios.map(async (s) => {
      const stock = await prisma.credencial.count({
        where: { servicio_id: s.id, disponible: true, asignada_a: null }
      });
      return {
        id: s.id,
        nombre: s.nombre,
        descripcion_base: s.descripcion_base,
        precio_admin: s.precio_admin,
        precio_sugerido: s.precio_sugerido,
        logo_url: s.logo_url,
        categoria: s.categoria,
        activo: s.activo,
        proveedor_id: s.proveedor_id,
        stock
      };
    }));

    res.json(withStock);
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
    const misServicios = await prisma.miServicio.findMany({
      where: { vendor_id: req.vendor!.id },
      include: { servicio: true }
    });

    const withStock = await Promise.all(misServicios.map(async (ms: any) => {
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

/**
 * PATCH /api/mis_servicios/:id
 * Actualiza el precio de venta del vendedor para un servicio específico.
 */
router.patch('/mis_servicios/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params as { id: string };
    const { precio_venta } = req.body;

    const servicio = await prisma.miServicio.findFirst({
      where: { id, vendor_id: req.vendor!.id },
    });

    if (!servicio) {
      res.status(404).json({ error: 'Servicio no encontrado' });
      return;
    }

    const updated = await prisma.miServicio.update({
      where: { id },
      data: { precio_venta: parseFloat(precio_venta) || 0 },
      include: { servicio: true },
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Error actualizando precio de venta' });
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
    const uniqueServicioIds = Array.from(new Set(misServicios.map(s => s.servicio_id)));

    // Buscar imágenes: solo las vinculadas a los servicios activos del vendedor
    const imagenesRaw = await prisma.imagen.findMany({
      where: {
        activo: true,
        ...(etiqueta ? { etiquetas: { contains: etiqueta as string } } : {}),
        OR: [
          { servicio_id: null },
          { servicio_id: { in: uniqueServicioIds } }
        ]
      },
      include: {
        servicio: { select: { id: true, nombre: true, logo_url: true } }
      },
      orderBy: { creado_en: 'desc' },
    });

    // Deduplicar imágenes por url_base para evitar que vean "múltiples del mismo" si el admin lo subió varias veces
    const map = new Map<string, typeof imagenesRaw[0]>();
    for (const img of imagenesRaw) {
      if (!map.has(img.url_base)) {
        map.set(img.url_base, img);
      }
    }
    const imagenes = Array.from(map.values());

    res.json(imagenes);
  } catch (error) {
    console.error(error);
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
router.post('/pedidos', upload.single('comprobante'), async (req: Request, res: Response): Promise<void> => {
  try {
    const vendor = req.vendor!;

    // Verificar que el plan permita hacer pedidos
    if (!vendor.plan.pedidos_automaticos && vendor.role !== 'SUPERADMIN') {
      res.status(403).json({
        error: 'Tu plan no incluye pedidos de credenciales',
        reason: 'plan_limit_reached',
        current_plan: vendor.plan.nombre,
        message: `El plan ${vendor.plan.nombre} no incluye solicitud de credenciales. Mejora tu plan para acceder a esta función.`,
      });
      return;
    }

    console.log(`[PEDIDOS] Request received. Content-Type: ${req.headers['content-type']}`);
    console.log(`[PEDIDOS] File status: ${req.file ? 'FILE_PRESENT' : 'FILE_MISSING'}`);
    
    const { servicio_id, cantidad, notas, comprobante_url: bodyComprobanteUrl, moneda } = req.body;

    if (!servicio_id) {
      res.status(400).json({ error: 'servicio_id es requerido' });
      return;
    }

    const cantidadFinal = parseInt(cantidad) || 1;

    // Verificar Stock (Hard Block)
    const disponibles = await prisma.credencial.count({
      where: { servicio_id, asignada_a: null }
    });

    if (disponibles === 0) {
      res.status(400).json({ 
        error: 'AGOTADO: No hay cuentas disponibles para este servicio en este momento.',
        reason: 'out_of_stock'
      });
      return;
    }

    const monedaFinal = moneda || 'BOB';
    let comprobante_url: string | null = bodyComprobanteUrl || null;
    if (req.file) {
      comprobante_url = getFileUrl(req.file);
    } else if ((req as any).files && (req as any).files.length > 0) {
      comprobante_url = getFileUrl((req as any).files[0]);
    }

    const pedido = await prisma.pedido.create({
      data: {
        vendor_id: vendor.id,
        servicio_id,
        cantidad: cantidadFinal,
        comprobante_url,
        moneda: monedaFinal,
        notas: notas || null,
      },
      include: { servicio: { select: { nombre: true, precio_admin: true } } },
    });

    console.log(`[PEDIDO] Nuevo pedido creado ID: ${pedido.id} - Comprobante: ${comprobante_url || 'N/A'}`);

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

/**
 * DELETE /api/pedidos/:id
 * Elimina un pedido del propio vendedor.
 */
router.delete('/pedidos/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params as { id: string };
    const vendor = req.vendor!;

    const pedido = await prisma.pedido.findFirst({
      where: { id, vendor_id: vendor.id }
    });

    if (!pedido) {
      res.status(404).json({ error: 'Pedido no encontrado' });
      return;
    }

    await prisma.$transaction([
      prisma.credencial.updateMany({
        where: { pedido_id: id },
        data: { pedido_id: null, asignada_a: null, disponible: true }
      }),
      prisma.pedido.delete({ where: { id } })
    ]);

    res.json({ message: 'Pedido eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error eliminando pedido' });
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
    // Lectura fresca usando el prisma global (con pool de conexiones)
    const vendor = await prisma.vendor.findUnique({
      where: { id: req.vendor!.id },
      include: { plan: true }
    });

    if (!vendor) {
      res.status(404).json({ error: 'Vendor no encontrado' });
      return;
    }

    const responseData = {
      id: vendor.id,
      nombre: vendor.nombre,
      alias: vendor.alias,
      telefono: vendor.telefono,
      whatsapp: vendor.whatsapp,
      logo_url: vendor.logo_url,
      plan: vendor.plan.nombre,
      plan_features: {
        pedidos_automaticos: vendor.plan.pedidos_automaticos,
        enlace_publico: vendor.plan.enlace_publico,
        marketplace_proveedor: vendor.plan.marketplace_proveedor,
        limite_servicios: vendor.plan.limite_servicios,
      },
      texto_limite: (vendor as any).plan?.texto_limite,
      plan_id: vendor.plan_id,
      role: vendor.role,
      es_colaborador: (vendor as any).es_colaborador || false,
      status: vendor.status,
      rating: vendor.rating,
      biografia: vendor.biografia,
      whatsapp_api_enabled: vendor.whatsapp_api_enabled,
      whatsapp_api_token: vendor.whatsapp_api_token,
      qr_bob: (vendor as any).qr_bob,
      qr_usd: (vendor as any).qr_usd,
      tigo_money: (vendor as any).tigo_money,
      fecha_registro: vendor.fecha_registro,
      fecha_vencimiento: vendor.fecha_vencimiento,
    };
    
    res.json(responseData);
  } catch (error) {
    console.error('[API] Error en GET /perfil:', error);
    res.status(500).json({ error: 'Error obteniendo perfil' });
  }
});

/**
 * PUT /api/perfil
 * Actualiza logo, WhatsApp y alias del vendedor.
 */
router.put('/perfil',
  upload.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'qr_bob', maxCount: 1 },
    { name: 'qr_usd', maxCount: 1 }
  ]),
  async (req: Request, res: Response): Promise<void> => {
  try {
    const vendor = req.vendor!;
    
    const { 
      whatsapp, alias, nombre, logo_url, logo_cloudinary_id, biografia,
      whatsapp_api_enabled, whatsapp_api_token,
      qr_bob_url, qr_usd_url, tigo_money
    } = req.body;

    const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;

    // Obtener URLs finales (Archivo local > URL manual)
    const finalLogoUrl = (files?.logo && files.logo[0]) ? getFileUrl(files.logo[0]) : logo_url;
    const finalQrBobUrl = (files?.qr_bob && files.qr_bob[0]) ? getFileUrl(files.qr_bob[0]) : qr_bob_url;
    const finalQrUsdUrl = (files?.qr_usd && files.qr_usd[0]) ? getFileUrl(files.qr_usd[0]) : qr_usd_url;

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

    // Parsing estricto para booleanos (formData envía strings)
    let apiEnabled: boolean | undefined = undefined;
    if (whatsapp_api_enabled !== undefined) {
      apiEnabled = (whatsapp_api_enabled === 'true' || whatsapp_api_enabled === true);
    }

    const updateData: any = {
      ...(whatsapp !== undefined && { whatsapp }),
      ...(alias !== undefined && { alias: alias.toLowerCase() }),
      ...(nombre !== undefined && { nombre }),
      ...(finalLogoUrl !== undefined && { logo_url: finalLogoUrl }),
      ...(logo_cloudinary_id !== undefined && { logo_cloudinary_id }),
      ...(biografia !== undefined && { biografia }),
      ...(apiEnabled !== undefined && { whatsapp_api_enabled: apiEnabled }),
      ...(whatsapp_api_token !== undefined && { whatsapp_api_token }),
      ...(finalQrBobUrl !== undefined && { qr_bob: finalQrBobUrl }),
      ...(finalQrUsdUrl !== undefined && { qr_usd: finalQrUsdUrl }),
      ...(tigo_money !== undefined && { tigo_money }),
    };

    const updated = await prisma.vendor.update({
      where: { id: vendor.id },
      data: updateData,
      include: { plan: true },
    });

    res.json({
      message: 'Perfil actualizado',
      vendor: {
        id: (updated as any).id,
        nombre: (updated as any).nombre,
        alias: (updated as any).alias,
        whatsapp: (updated as any).whatsapp,
        logo_url: (updated as any).logo_url,
        plan: (updated as any).plan.nombre,
        plan_features: {
          pedidos_automaticos: (updated as any).plan.pedidos_automaticos,
          enlace_publico: (updated as any).plan.enlace_publico,
          marketplace_proveedor: (updated as any).plan.marketplace_proveedor,
          limite_servicios: (updated as any).plan.limite_servicios,
        },
        texto_limite: (updated as any).plan.texto_limite,
        biografia: (updated as any).biografia,
        rating: (updated as any).rating,
        whatsapp_api_enabled: (updated as any).whatsapp_api_enabled,
        whatsapp_api_token: (updated as any).whatsapp_api_token,
        qr_bob: (updated as any).qr_bob,
        qr_usd: (updated as any).qr_usd,
        tigo_money: (updated as any).tigo_money,
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
 * DELETE /api/pagos/:id
 * Elimina un pago del propio vendedor.
 */
router.delete('/pagos/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params as { id: string };
    const vendor = req.vendor!;

    const pago = await prisma.pago.findFirst({
      where: { id, vendor_id: vendor.id }
    });

    if (!pago) {
      res.status(404).json({ error: 'Pago no encontrado o no te pertenece' });
      return;
    }

    await prisma.pago.delete({ where: { id } });
    res.json({ message: 'Pago eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error eliminando pago' });
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
      qr_cobro_bob: ajustes?.qr_cobro_bob || '',
      qr_cobro_usd: ajustes?.qr_cobro_usd || '',
      tigo_money_numero: ajustes?.tigo_money_numero || '',
      nombre_plataforma: ajustes?.nombre_plataforma || 'Ares',
      logo_url: ajustes?.logo_url || '',
      noticia_global: ajustes?.noticia_global || '',
      whatsapp_soporte: ajustes?.whatsapp_soporte || '',
    });
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo ajustes' });
  }
});

// ═══════════════════════════════════════════
// MARKETPLACE B2B (Servicios de Proveedores)
// ═══════════════════════════════════════════




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

    // Verificar que el plan tenga enlace_publico habilitado
    const plan = await prisma.plan.findUnique({ where: { id: vendor.plan_id }, select: { enlace_publico: true, nombre: true } });
    if (!plan || !plan.enlace_publico) {
      res.status(403).json({ error: 'Este vendedor no tiene enlace público activo. Requiere un plan con Enlace Público habilitado.' });
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
