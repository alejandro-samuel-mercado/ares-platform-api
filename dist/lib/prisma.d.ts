/**
 * Prisma Client Singleton
 *
 * Evita la creación de múltiples instancias del PrismaClient
 * durante el desarrollo con hot-reload (tsx watch).
 */
import { PrismaClient } from '@prisma/client';
export declare const prisma: PrismaClient<import("@prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
export default prisma;
//# sourceMappingURL=prisma.d.ts.map