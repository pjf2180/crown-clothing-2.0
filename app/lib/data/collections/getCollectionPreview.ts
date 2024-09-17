import { CollectionItemModel } from "../../models/collectionItem.models";
import db from "../../prisma/client";

export interface CollectionPreviewModel {
  name: string;
  items: CollectionItemModel[];
}

export async function getCollectionPreview(): Promise<CollectionPreviewModel[]> {
  const items = await db.category.findMany({
    include: {
      items: { take: 5, orderBy: { createdAt: "asc" } },
    },
  });

  return items.map((i) => {
    return {
      name: i.name,
      items: i.items,
    };
  });
}
