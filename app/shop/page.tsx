import { getCollections } from "../lib/data/collections/getCollections";
import { CollectionMap } from "../lib/models/collection.models";
import { CollectionItemModel } from "../lib/models/collectionItem.models";
import { CollectionPreview } from "../ui/collection-preview/collection-preview.component";

export default async function ShopPage() {
  const collectionMap: CollectionMap = await getCollections();
  const collectionKeys: string[] = Object.keys(collectionMap);

  return collectionKeys.map((collectionKey: string) => {
    const collectionTitle: string = collectionMap[collectionKey].title;
    const collectionItems: CollectionItemModel[] =
      collectionMap[collectionKey].items;
    return (
      <CollectionPreview
        key={collectionKey}
        title={collectionTitle}
        items={collectionItems}
      />
    );
  });
}
