
import { PrismaClient } from './src/generated/client';

const prisma = new PrismaClient();

async function testPersistence() {
  console.log('--- DB PERSISTENCE TEST ---');
  try {
    const res = await prisma.ajustesPlataforma.upsert({
      where: { id: '1' },
      update: { qr_cobro_url: 'https://res.cloudinary.com/demo/image/upload/v1611000000/sample.jpg' },
      create: { 
        id: '1', 
        qr_cobro_url: 'https://res.cloudinary.com/demo/image/upload/v1611000000/sample.jpg',
        nombre_plataforma: 'Ares Test' 
      }
    });
    console.log('Update result:', res);
    
    const verify = await prisma.ajustesPlataforma.findUnique({ where: { id: '1' } });
    console.log('Final value from DB:', verify?.qr_cobro_url);
  } catch (err) {
    console.error('Test failed:', err);
  } finally {
    await prisma.$disconnect();
  }
}

testPersistence();
