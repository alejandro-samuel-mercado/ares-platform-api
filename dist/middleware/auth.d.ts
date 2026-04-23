/**
 * Middleware: AuthMiddleware
 *
 * Valida el JWT en el header Authorization (Bearer token).
 * Busca al vendor en la BD con su plan asociado y lo adjunta a req.vendor.
 *
 * Casos:
 * - Sin token → 401 Unauthorized
 * - Token inválido/expirado → 401 Unauthorized
 * - Vendor no encontrado → 401 Unauthorized
 * - OK → adjunta vendor+plan al request y continúa
 */
import { Request, Response, NextFunction } from 'express';
export declare function authMiddleware(req: Request, res: Response, next: NextFunction): Promise<void>;
export default authMiddleware;
//# sourceMappingURL=auth.d.ts.map