import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const imgs = await prisma.imagen.findMany({ select: { id: true, titulo: true, categoria: true, servicio_id: true } });
  console.log("Images:");
  console.table(imgs);
  const ms = await prisma.miServicio.findMany({ select: { id: true, vendor_id: true, servicio_id: true } });
  console.log("Mis Servicios:");
  console.table(ms);
}
main();
