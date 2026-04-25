import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function check() {
  const plans = await prisma.plan.findMany();
  console.log('--- PLANS CONFIG ---');
  plans.forEach(p => {
    console.log(`${p.nombre} (${p.id}): pedidos_automaticos = ${p.pedidos_automaticos}`);
  });
  
  const v = await prisma.vendor.findFirst({
      where: { alias: 'colaborador' }, // A known vendor with vendedor plan
      include: { plan: true }
  });
  if (v) {
      console.log('--- SPECIFIC VENDOR CHECK ---');
      console.log(`Vendor: ${v.alias}`);
      console.log(`Plan: ${v.plan.nombre}`);
      console.log(`Pedidos Enabled in DB: ${v.plan.pedidos_automaticos}`);
  }
}

check()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
