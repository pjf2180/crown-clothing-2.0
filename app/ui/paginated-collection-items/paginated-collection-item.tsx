"use client";
import { Item } from "@prisma/client";
import { useEffect, useState } from "react";
import { CollectionItem } from "../collection-item/collection-item.component";
import { getProducts } from "@/app/api/products/calls";
import { AppButton } from "../button/Button";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";
import clsx from "clsx";

export function PaginatedCollectionItems({
  productCategory,
  cursor,
}: {
  productCategory: string;
  cursor: number;
}) {
  const [products, setProducts] = useState<{ [cursor: number]: Item[] }>([]);
  const [latestCursor, setLatestCursor] = useState(cursor);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (cursor?: number) => {
    try {
      setLoading(true);
      const jsonResponse = await getProducts(productCategory, cursor);
      const { data } = jsonResponse;
      setProducts((prev) => ({ ...prev, [jsonResponse.cursor]: data }));
      setLatestCursor(jsonResponse.cursor);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onButtonClick = () => {
    fetchProducts(latestCursor);
  };

  const fetchedItems: Item[] = Object.values(products).reduce(
    (acum, current) => {
      return [...acum, ...current];
    },
    []
  );

  return (
    <>
      {fetchedItems.map((product) => {
        return (
          <CollectionItem key={product.id} item={product}></CollectionItem>
        );
      })}
      {latestCursor !== null && (
        <AppButton
          className={clsx(
            "absolute bottom-0 left-[50%] translate-x-[-50%] flex items-center",
            { "hover:bg-white dark:hover:bg-black": loading }
          )}
          onClick={onButtonClick}
        >
          {!loading && "Load More"}
          {loading && <LoadingSpinner diameter={30} />}
        </AppButton>
      )}
    </>
  );
}
