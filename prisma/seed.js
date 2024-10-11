const prisma = require("../prisma");
const seed = async () => {
        const employee = [];
        for (let i = 0; i < 10; i++) {
          employee.push({ name: `Employee ${i}` });
        }
        await prisma.employee.createMany({ data: employee });
      };
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
