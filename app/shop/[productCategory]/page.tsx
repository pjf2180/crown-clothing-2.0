import { PaginatedCollectionItems } from "@/app/ui/paginated-collection-items/paginated-collection-item";

export default async function ProductCategoryPage({
  params,
}: {
  params: { productCategory: string };
}) {
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
        <PaginatedCollectionItems productCategory={params.productCategory} />
      </div>
    </div>
  );
}
