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
                max-md:hidden                
                text-[38px]
                font-normal
                mx-auto mb-[30px]
                md:sticky
                md:z-30
                md:top-0
                dark:text-white
            `}
      >
        {params.productCategory}
      </h1>
      <div
        className={`
          md:hidden  
        bg-white
          opacity-[0.97]
          sticky
          z-30
          top-[61px]
          w-full
          flex
          items-center
          justify-center
        `}
      >
          <h1
            className={`
              text-[38px]
              font-normal
              mx-auto
              mb-2
             
            `}
          >
            {params.productCategory}
          </h1>
      </div>
      <div
        className={`
                grid
                grid-cols-2
                gap-[10px] 
                w-full
                md:grid-cols-3
                lg:grid-cols-4
                relative
                pb-16
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
