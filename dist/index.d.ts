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
declare const app: import("express-serve-static-core").Express;
export default app;
//# sourceMappingURL=index.d.ts.map