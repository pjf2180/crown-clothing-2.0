import { PrismaClient } from "@prisma/client";
import prismaClient from "../prisma/client";
import collections from "./collections.json";

async function main() {
  await prismaClient.$connect();
  await seedCollectionItems(prismaClient);
}

main()
  .then(() => console.log("Database seed succesful"))
  .catch(async (err) => {
    console.error(
      "An error occurred while attempting to seed the database:",
      err
    );
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });

async function seedCollectionItems(client: PrismaClient) {
  const collectionKeys = Object.keys(collections);

  const createDataProms = collectionKeys.map((key: string) => {
    const collection = collections[key as keyof typeof collections];
    const collectionItems = collection.items;

    return client.category.upsert({
      where: {
        name: collection.routeName,
      },
      create: {
        name: collection.routeName,
        items: { create: collectionItems },
      },
      update: {
        name: collection.routeName,
      },
    });
  });

  return Promise.all(createDataProms);
}
