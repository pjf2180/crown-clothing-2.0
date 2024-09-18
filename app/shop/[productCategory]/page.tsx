import { getItems } from "@/app/lib/data/items/getItems";
import { CollectionItem } from "@/app/ui/collection-item/collection-item.component";
import { PaginatedCollectionItems } from "@/app/ui/paginated-collection-items/paginated-collection-item";

export default async function ProductCategoryPage({
  params,
}: {
  params: { productCategory: string };
}) {
  const firstTenItems = await getItems(params.productCategory);
  return (
    <div
      className={`
            flex
            flex-col
            items-center
            w-full`}
    >
      <h1
        className={`
                text-[38px]
                font-normal
                mx-auto mb-[30px]
            `}
      >
        {params.productCategory}
      </h1>
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
        {firstTenItems.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
        <PaginatedCollectionItems
          cursor={firstTenItems[firstTenItems.length - 1].id}
          productCategory={params.productCategory}
        />
      </div>
    </div>
  );
}
