const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const ajustes = await prisma.ajustesPlataforma.findMany();
    console.log('AJUSTES:', JSON.stringify(ajustes, null, 2));
    
    const vendors = await prisma.vendor.findMany({
      where: {
        OR: [
          { nombre: { contains: 'test', mode: 'insensitive' } },
          { alias: { contains: 'test', mode: 'insensitive' } },
          { nombre: { contains: '222', mode: 'insensitive' } },
          { alias: { contains: '222', mode: 'insensitive' } }
        ]
      }
    });
    console.log('VENDORS FOUND:', JSON.stringify(vendors, null, 2));
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
