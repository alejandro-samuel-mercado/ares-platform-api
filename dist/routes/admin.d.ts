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
declare const router: import("express-serve-static-core").Router;
export default router;
//# sourceMappingURL=admin.d.ts.map