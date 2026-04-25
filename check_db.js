const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const lastPedidos = await prisma.pedido.findMany({
    take: 5,
    orderBy: { creado_en: 'desc' },
    select: { id: true, notas: true, comprobante_url: true, creado_en: true }
  });
  console.log('--- LAST 5 PEDIDOS ---');
  console.log(JSON.stringify(lastPedidos, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());
