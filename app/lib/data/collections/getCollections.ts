import { CollectionMap } from "../../models/collection.models";
import db from "../../prisma/client";

export async function getCollections(): Promise<CollectionMap> {
  const categories = await db.category.findMany({
    include: {
      items: true,
    },
  });
  const map: CollectionMap = categories.reduce((acum, current) => {
    acum[current.name] = current;
    return acum;
  }, {} as CollectionMap);
  
  return map;
}
