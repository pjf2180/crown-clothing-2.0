import { CollectionMap } from "@/app/lib/models/collection.models";
import { CollectionItemModel } from "@/app/lib/models/collectionItem.models";
import { CollectionItem } from "@/app/ui/collection-item/collection-item.component";
import { getCollections } from "@/app/lib/data/collections/getCollections";

export default async function ProductCategoryPage({
  params,
}: {
  params: { productCategory: string };
}) {
  const collectionItems: CollectionMap = await getCollections();
  const collection = collectionItems[params.productCategory];
  const { items } = collection;
  return (
    <div
      className={`
            flex
            flex-col
            items-center
            w-full`}
    >
      <h2
        className={`
                text-[38px]
                mx-auto mb-[30px]
            `}
      >
        {collection.title}
      </h2>
      <div
        className={`
                grid 
                grid-cols-2
                gap-[10px] 
                w-full
                md:grid-cols-3
                lg:grid-cols-4
            `}
      >
        {items.map((item: CollectionItemModel) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
}
