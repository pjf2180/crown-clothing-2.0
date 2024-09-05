import { prismaClient } from "../app/lib/prisma/client";
import { $Enums, Prisma, PrismaClient } from "@prisma/client";
const client = new PrismaClient();

async function main() {
    await client.$connect();
    // perform logic to seed database
}

main()
    .catch(async (err) => {
        console.error(
            'An error occurred while attempting to seed the database:',
            err,
        );
    })
    .finally(async () => {
        await client.$disconnect();
    })