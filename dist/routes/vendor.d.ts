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
declare const router: import("express-serve-static-core").Router;
export default router;
//# sourceMappingURL=vendor.d.ts.map