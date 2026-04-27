/**
 * Servidor Principal — Plataforma Ares
 *
 * Express.js API REST con:
 * - Autenticación JWT
 * - Middleware de suscripción (bloqueo por vencimiento)
 * - Aislamiento multi-tenant por vendor_id
 * - Guards de plan y rol
 *
 * Las rutas se organizan en 3 grupos:
 * 1. /api/auth/* — Públicas (login, registro)
 * 2. /api/* — Requieren auth + suscripción activa
 * 3. /api/admin/* — Requieren auth + rol SUPERADMIN
 */

import express from 'express';
import cors from 'cors';
import path from 'path';

import authRoutes from './routes/auth';
import vendorRoutes from './routes/vendor';
import adminRoutes from './routes/admin';
import webhookRoutes from './routes/webhooks';
import backupRoutes from './routes/backup';
import marketplaceRoutes from './routes/marketplace';
import maestrosRoutes from './routes/maestros';

import { authMiddleware } from './middleware/auth';
import { subscriptionMiddleware } from './middleware/subscription';
import { roleGuard } from './middleware/roleGuard';
import { colaboradorGuard } from './middleware/colaboradorGuard';
import { upload, getFileUrl } from './lib/cloudinary';
import prisma from './lib/prisma';
import { OneSignal } from './lib/onesignal';

const app = express();
const PORT = process.env.PORT || 4000;

// ─── Middleware Global ────────────────────────────────────────
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));

// Static assets (for local upload fallback)
app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));

app.use(express.urlencoded({ extended: true }));

// ─── Health Check ─────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    platform: 'Ares',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// ─── Rutas Públicas (sin auth) ────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/webhooks', webhookRoutes);

// Ajustes públicos (para pantalla de renovación sin auth)
app.get('/api/ajustes-publicos', async (_req, res) => {
  try {
    const { PrismaClient } = await import('@prisma/client');
    const prisma = new PrismaClient();
    const ajustes = await prisma.ajustesPlataforma.findUnique({ where: { id: '1' } });
    await prisma.$disconnect();
    res.json({
      qr_cobro_url: ajustes?.qr_cobro_url || '',
      qr_cobro_bob: ajustes?.qr_cobro_bob || '',
      qr_cobro_usd: ajustes?.qr_cobro_usd || '',
      tigo_money_numero: ajustes?.tigo_money_numero || '',
      nombre_plataforma: ajustes?.nombre_plataforma || 'Ares',
      logo_url: ajustes?.logo_url || '',
      noticia_global: ajustes?.noticia_global || 'Bienvenido a Ares v2.',
      whatsapp_soporte: ajustes?.whatsapp_soporte || '',
      watermark_enabled: ajustes?.watermark_enabled || false,
      watermark_type: ajustes?.watermark_type || 'TEXT',
      watermark_text: ajustes?.watermark_text || 'Ares Platform',
      watermark_image_url: ajustes?.watermark_image_url || '',
      watermark_opacity: ajustes?.watermark_opacity ?? 0.5,
    });
  } catch {
    res.status(500).json({ error: 'Error obteniendo ajustes' });
  }
});

// ─── Rutas Admin (auth + suscripción + rol SUPERADMIN) ────────
app.use('/api/admin/backups',
  authMiddleware,
  roleGuard('SUPERADMIN'),
  backupRoutes
);

app.use('/api/admin',
  authMiddleware,
  roleGuard('SUPERADMIN'),
  colaboradorGuard,
  adminRoutes,
  maestrosRoutes // Admin CRUD
);

// ─── Rutas Vendor (auth + suscripción) ────────────────────────
// Nota: /api/pagos/comprobante se exime del subscriptionMiddleware
app.post('/api/pagos/comprobante',
  authMiddleware,
  upload.single('comprobante'),
  async (req, res) => {
    try {
      const vendor = (req as any).vendor;
      const { monto, plan_id, comprobante_url } = req.body;
      const file = req.file as any;

      if (!monto || !plan_id) {
        res.status(400).json({ error: 'monto y plan_id son requeridos' });
        return;
      }

      if (!file && !comprobante_url) {
        res.status(400).json({ error: 'Comprobante requerido' });
        return;
      }

      const final_comprobante_url = file ? getFileUrl(file) : comprobante_url;

      console.log('--- INTENTO DE CARGA DE COMPROBANTE ---');
      console.log('Vendor:', vendor.id, '@' + vendor.alias);
      console.log('Payload:', { monto, plan_id, final_comprobante_url });

      const pago = await prisma.pago.create({
        data: {
          vendor_id: vendor.id,
          monto: parseFloat(monto),
          plan_id,
          status: 'PENDIENTE',
          comprobante_url: final_comprobante_url,
        },
      });

      console.log('Pago registrado exitosamente:', pago.id);

      // Notificar al admin sobre nuevo pago
      try {
        await OneSignal.sendNotification({
          headings: { es: '💰 Nuevo Pago Recibido', en: '💰 New Payment Received' },
          contents: { 
            es: `El vendedor @${vendor.alias} ha subido un comprobante de $${monto}.`,
            en: `Vendor @${vendor.alias} uploaded a receipt for $${monto}.`
          },
          filters: [{ field: 'tag', key: 'role', relation: '=', value: 'SUPERADMIN' }]
        });
      } catch (err) {
        console.error('OneSignal Error:', err);
      }

      res.status(201).json(pago);
    } catch (error) {
      console.error('❌ ERROR FATAL SUBIENDO COMPROBANTE:', error);
      res.status(500).json({ 
        error: 'Error subiendo comprobante',
        details: error instanceof Error ? error.message : 'Error desconocido'
      });
    }
  }
);

app.use('/api/marketplace',
  authMiddleware,
  subscriptionMiddleware,
  marketplaceRoutes
);

app.use('/api',
  authMiddleware,
  subscriptionMiddleware,
  vendorRoutes,
  maestrosRoutes // Read-only for vendors
);

// ─── Error Handler Global ─────────────────────────────────────
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('🔥 Error no manejado:', err);
  res.status(500).json({
    error: 'Error interno del servidor',
    ...(process.env.NODE_ENV === 'development' && { details: err.message }),
  });
});

// ─── Iniciar Servidor ─────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`
  ╔═══════════════════════════════════════════╗
  ║         🔱 ARES API SERVER 🔱            ║
  ║─────────────────────────────────────────  ║
  ║  Puerto:  ${PORT}                            ║
  ║  Entorno: ${process.env.NODE_ENV || 'development'}                  ║
  ║  Health:  http://localhost:${PORT}/api/health ║
  ╚═══════════════════════════════════════════╝
  `);
});

export default app;
