import { PrismaClient } from "@prisma/client";
import prismaClient from "../prisma/client";
import collections from "./collections.json";

async function main() {
  await prismaClient.$connect();
  await prismaClient.category.deleteMany();
  await prismaClient.item.deleteMany();
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
  let multiplier = 14;
  let currentId = 1;

  const createDataProms = collectionKeys.map((key: string) => {
    const collection = collections[key as keyof typeof collections];
    const multipliedItems = multiplyList(
      multiplier,
      currentId,
      collection.items
    );
    currentId = multipliedItems[multipliedItems.length - 1].id + 1;
    return client.category.upsert({
      where: {
        name: collection.routeName,
      },
      create: {
        name: collection.routeName,
        items: { create: multipliedItems },
      },
      update: {
        name: collection.routeName,
      },
    });
  });

  return Promise.all(createDataProms);
}

function multiplyList<T>(times: number, startWithId: number, items: T[]) {
  let currentId = startWithId;
  const allItems = [];
  for (let i = 0; i < times; i++) {
    const batch = items.map((i) => ({ ...i, id: currentId++ }));
    allItems.push(...batch);
  }
  return allItems;
}
