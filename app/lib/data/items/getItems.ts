import db from "../../prisma/client";

export async function getItems(
  category: string,
  limit = 10,
  cursorId?: number
) {
  if (cursorId === undefined) {
    const items = await db.item.findMany({
      take: limit,
      where: {
        categories: { every: { name: { equals: category } } },
      },
      orderBy: {
        id: "asc",
      },
    });
    return items;
  }
  const items = await db.item.findMany({
    take: limit,
    where: {
      categories: { every: { name: { equals: category } } },
    },
    orderBy: {
      id: "asc",
    },
    skip: 1,
    cursor: {
      id: cursorId,
    },
  });
  return items;
}

export async function getTotalItems(category: string): Promise<number> {
  const count = await db.item.count({
    where: {
      categories: { every: { name: { equals: category } } },
    },
  });
  return count;
}
