import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy users

  const adminPassword = await bcrypt.hash('rahasia123', 10);
  const userAdmin = await prisma.user.upsert({
    where: { email: 'admin@mykakeibo.com' },
    update: {},
    create: {
      email: 'admin@mykakeibo.com',
      fullname: 'Admin My Kakeibo',
      password: adminPassword,
    },
  });

  console.log({ userAdmin });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
