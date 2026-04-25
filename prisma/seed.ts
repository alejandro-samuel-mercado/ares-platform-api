/**
 * Seed Script — Plataforma Ares v2 (Premium Edition)
 * 
 * Enriquecido para testing intensivo de la UI Cartoon-Futurista.
 */

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // 1. LIMPIEZA (Opcional pero recomendada para frescura de datos)
  // await prisma.pago.deleteMany({});
  // await prisma.pedido.deleteMany({});
  // await prisma.partido.deleteMany({});
  // await prisma.imagen.deleteMany({});

  // ─── Planes de Membresía ───────────────────────────────────
  const plans = [
    { id: 'plan-gratis', nombre: 'Gratis', precio: 0, dias: 7, limite_servicios: 2, texto_limite: 'Se bloquea al día 8. No copia WhatsApp en textos' },
    { id: 'plan-vendedor', nombre: 'Vendedor', precio: 35, dias: 30, limite_servicios: 5, pedidos_automaticos: true },
    { id: 'plan-pro', nombre: 'Pro', precio: 70, dias: 30, limite_servicios: null, pedidos_automaticos: true, enlace_publico: true },
    { id: 'plan-proveedor', nombre: 'Proveedor', precio: 200, dias: 30, limite_servicios: null, pedidos_automaticos: true, enlace_publico: true, marketplace_proveedor: true, texto_limite: 'Aplica comisión del 10% por venta generada' }
  ];

  await prisma.ajustesPlataforma.upsert({
    where: { id: '1' },
    update: {},
    create: {
      id: '1',
      nombre_plataforma: 'ARES SaaS',
      noticia_global: '🚀 Bienvenidos a la Nueva Era de Ares v2.0. Revisa el Marketplace!',
      whatsapp_soporte: '59100000000',
      texto_legal: 'Sistema de gestión de servicios digitales Ares. Reservados todos los derechos.',
      qr_cobro_url: 'https://res.cloudinary.com/dqcayp58k/image/upload/v1703000004/ares/qr_pago_test.png'
    }
  });

  for (const p of plans) {
    await prisma.plan.upsert({
      where: { id: p.id },
      update: { 
        ...p,
        texto_limite: 'texto_limite' in p ? p.texto_limite : null
      },
      create: { 
        id: p.id,
        nombre: p.nombre,
        precio: p.precio,
        dias: p.dias,
        limite_servicios: p.limite_servicios,
        pedidos_automaticos: p.pedidos_automaticos ?? false,
        enlace_publico: p.enlace_publico ?? false,
        marketplace_proveedor: p.marketplace_proveedor ?? false,
        texto_limite: 'texto_limite' in p ? p.texto_limite : null
      }
    });
  }

  // ─── Superadmin & Vendedor de Prueba ────────────────────────
  const pass = await bcrypt.hash('admin2026', 12);
  
  const admin = await prisma.vendor.upsert({
    where: { alias: 'admin' },
    update: {},
    create: {
      nombre: 'Ares Master',
      alias: 'admin',
      telefono: '59100000000',
      password_hash: pass,
      plan_id: 'plan-pro',
      status: 'ACTIVE',
      role: 'SUPERADMIN',
      fecha_vencimiento: new Date('2030-01-01')
    }
  });

  const vendorTest = await prisma.vendor.upsert({
    where: { alias: 'alexander' },
    update: {},
    create: {
      nombre: 'Alexander Ares',
      alias: 'alexander',
      telefono: '59170000000',
      password_hash: pass,
      plan_id: 'plan-pro',
      status: 'ACTIVE',
      role: 'DISTRIBUTOR',
      fecha_vencimiento: new Date('2026-12-31'),
      logo_url: 'https://res.cloudinary.com/dqcayp58k/image/upload/v1703000002/ares/vendor_logo_test.png',
      whatsapp: '59170000000',
      rating: 4.8,
      biografia: 'Líder en activaciones de streaming y TV Digital en la región.'
    }
  });

  const collabTest = await prisma.vendor.upsert({
    where: { alias: 'colaborador' },
    update: {},
    create: {
      nombre: 'Colaborador Ares',
      alias: 'colaborador',
      telefono: '59171111111',
      password_hash: pass,
      plan_id: 'plan-vendedor',
      status: 'ACTIVE',
      role: 'VENDOR',
      es_colaborador: true,
      fecha_vencimiento: new Date('2026-12-31')
    }
  });

  // ─── Servicios Base ───────────────────────────────────────
  const svcs = [
    { id: 's-netflix', nombre: 'Netflix Premium', categoria: 'STREAMING', precio_sugerido: 35, logo_url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png' },
    { id: 's-disney', nombre: 'Disney+ Star', categoria: 'STREAMING', precio_sugerido: 25, logo_url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
    { id: 's-iptv', nombre: 'Ares IPTV Pro', categoria: 'IPTV', precio_sugerido: 45, logo_url: 'https://cdn-icons-png.flaticon.com/512/5905/5905581.png', es_iptv_propio: true },
    { id: 's-magis', nombre: 'Magis TV Full', categoria: 'IPTV', precio_sugerido: 20, logo_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Magis_TV.jpg' }
  ];

  for (const s of svcs) {
    await prisma.servicioBase.upsert({
      where: { id: s.id },
      update: { ...s },
      create: { ...s, activo: true, descripcion_base: `${s.nombre} con soporte 24/7.` }
    });
  }

  // ─── Banco de Imágenes (Premium AI Content) ──────────────────
  const imgs = [
    { titulo: 'Netflix Premium Promo', etiquetas: '["netflix","premium","oferta"]', url_base: 'https://res.cloudinary.com/dqcayp58k/image/upload/v1703000000/ares/netflix_promo.jpg' },
    { titulo: 'Fútbol en Vivo', etiquetas: '["futbol","deportes","iptv"]', url_base: 'https://res.cloudinary.com/dqcayp58k/image/upload/v1703000001/ares/futbol_iptv.jpg' },
    { titulo: 'Ares IPTV Series', etiquetas: '["estrenos","hbo","max"]', url_base: 'https://res.cloudinary.com/dqcayp58k/image/upload/v1703000002/ares/series_cinema.jpg' }
  ];

  for (const img of imgs) {
    await prisma.imagen.create({ data: { ...img, public_id: `seed_${Math.random()}`, activo: true } });
  }

  // ─── Cartelera Deportiva (Partidos Reales/Próximos) ───────────
  const matches = [
    { 
      equipo_local: 'Real Madrid', 
      equipo_visita: 'Barcelona', 
      logo_local: 'https://res.cloudinary.com/dqcayp58k/image/upload/v1703000005/ares/club_rm.png',
      logo_visita: 'https://res.cloudinary.com/dqcayp58k/image/upload/v1703000006/ares/club_barca.png',
      liga: 'La Liga', 
      fecha: new Date(), 
      hora: '16:00', 
      canal: 'DSports', 
      requiere_iptv: true 
    },
    { 
      equipo_local: 'Man. City', 
      equipo_visita: 'Liverpool', 
      logo_local: 'https://res.cloudinary.com/dqcayp58k/image/upload/v1703000007/ares/club_mcity.png',
      logo_visita: 'https://res.cloudinary.com/dqcayp58k/image/upload/v1703000008/ares/club_lpool.png',
      liga: 'Premier League', 
      fecha: new Date(), 
      hora: '12:30', 
      canal: 'ESPN', 
      requiere_iptv: true 
    }
  ];

  for (const m of matches) {
    await prisma.partido.create({ data: { ...m, activo: true } });
  }

  // ─── Cola de Pedidos de Prueba ──────────────────────────
  await prisma.pedido.create({
    data: {
      vendor_id: vendorTest.id,
      servicio_id: 's-netflix',
      notas: 'Necesito 3 pantallas para cliente VIP.',
      status: 'PENDIENTE'
    }
  });

  // ─── Historial de Pagos (Tesoreria) ───────────────────────
  await prisma.pago.create({
    data: {
      vendor_id: vendorTest.id,
      plan_id: 'plan-pro',
      monto: 70,
      status: 'PENDIENTE',
      comprobante_url: 'https://res.cloudinary.com/dqcayp58k/image/upload/v1703000003/ares/comprobante_placeholder.jpg'
    }
  });

  // ─── Mensajes Rápidos (Scripts Base) ───────────────────────
  const msgs = [
    { titulo: 'Info Netflix', template: 'Hola 👋 Tengo Netflix Premium 1 mes en [PRECIO] Bs. ✅ 1 perfil solo para ti ✅ Ultra HD 4K ✅ Soporte si falla ¿Te lo activo? Escribe a: [WHATSAPP]' },
    { titulo: 'Info Disney+', template: 'Hola 👋 Disney+ mensual [PRECIO] Bs. ✅ Perfil personal ✅ Todo Marvel, Star Wars, Pixar ✅ 4K donde esté disponible ¿Lo quieres? [WHATSAPP]' },
    { titulo: 'Info IPTV Full', template: 'Hola 👋 Tengo IPTV con canales en vivo + películas y series [PRECIO] Bs/mes. ✅ +8000 canales ✅ Fútbol boliviano e internacional ✅ Películas y series 24/7 ✅ Soporte Pídemelo: [WHATSAPP]' },
    { titulo: 'Info IPTV Cinema', template: 'Hola 👋 IPTV solo de películas y series [PRECIO] Bs/mes. ✅ Estrenos actualizados ✅ Sin cortes, sin anuncios ✅ Calidad HD/Full HD. Info: [WHATSAPP]' },
    { titulo: 'Bienvenida', template: 'Hola, soy [NOMBRE_VENDEDOR]. Vendo cuentas de streaming. ¿Qué plataforma buscas? Netflix, Disney, Max, IPTV… Tengo todo 😎' },
    { titulo: 'Forma de pago', template: 'Puedes pagar por: 1. QR 2. Tigo Money: [WHATSAPP] 3. Transferencia. Me mandas comprobante y te activo en 5 min.' },
    { titulo: 'Entrega', template: 'Te entrego usuario y contraseña por aquí mismo. También te explico cómo usarlo en tu TV o celular. Soporte 24/7 ✅' },
    { titulo: '¿Es confiable?', template: 'Sí hermano, llevo tiempo en esto. Si falla te cambio la cuenta sin costo. No vendo compartido saturado. 1 perfil = 1 persona.' },
    { titulo: 'Muy caro', template: 'Te entiendo. Pero Netflix directo está 70 Bs y es 1 solo perfil. Yo te lo dejo en [PRECIO] Bs y te doy garantía.' },
    { titulo: 'Descuento', template: 'Precio fijo [PRECIO] Bs bro. Ya está con descuento. Pero si llevas 2 servicios te hago combo 😉 ¿Cuál más te interesa?' },
    { titulo: 'Promo 2x1', template: '🔥 PROMO HOY 🔥 Lleva Netflix + Disney por [PRECIO_COMBO] Bs. Ahorras [AHORRO] Bs. Solo por hoy. Escríbeme: [WHATSAPP]' },
    { titulo: 'Combo Fútbol', template: '¿Te pierdes los partidos? 🏆 Con mi IPTV Full ves todo el fútbol por [PRECIO] Bs/mes. Hoy juega: [PARTIDO_HOY]. Actívalo ya: [WHATSAPP]' },
    { titulo: 'Estreno de la semana', template: 'Ya disponible ✅ [NOMBRE_SERIE] en [PLATAFORMA]. Si no tienes cuenta, te la activa por [PRECIO] Bs. Pídela: [WHATSAPP]' },
    { titulo: 'Bienvenida post pago', template: 'Pago confirmado ✅ Tu cuenta de [SERVICIO]: Usuario: `` Clave: [PASS] Perfil: [PERFIL] Cualquier cosa me avisas [NOMBRE_VENDEDOR].' },
    { titulo: 'Renovación', template: 'Hola 👋 Tu [SERVICIO] vence en 3 días. Para no quedarte sin servicio, renueva por [PRECIO] Bs. Avisame y te mantengo el mismo perfil.' }
  ];

  for (let i = 0; i < msgs.length; i++) {
    await prisma.mensajeRapido.upsert({
      where: { id: `msg-${i + 1}` },
      update: { ...msgs[i], orden: i + 1 },
      create: { id: `msg-${i + 1}`, ...msgs[i], orden: i + 1, activo: true }
    });
  }

  console.log('\n🚀 SEED v2.0 COMPLETADO EXITOSAMENTE');
  console.log('------------------------------------');
  console.log('Admin Access: 59100000000 / admin2026');
  console.log('Vendor Access: 59170000000 / admin2026');
  console.log('------------------------------------// Fin del seed');
}

main()
  .catch((e) => { console.error(e); })
  .finally(async () => { await prisma.$disconnect(); });
