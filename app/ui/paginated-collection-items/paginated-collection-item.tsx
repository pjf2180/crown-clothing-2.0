"use client";
import { Item } from "@prisma/client";
import { useEffect, useState } from "react";
import { CollectionItem } from "../collection-item/collection-item.component";
import { getProducts } from "@/app/api/products/calls";

export function PaginatedCollectionItems({
  productCategory,
  cursor,
}: {
  productCategory: string;
  cursor: number;
}) {
  const [products, setProducts] = useState<{ [cursor: number]: Item[] }>([]);
  const [latestCursor, setLatestCursor] = useState(cursor);

  const fetchProducts = async (cursor?: number) => {
    try {
      const jsonResponse = await getProducts(productCategory, cursor);
      const { data } = jsonResponse;
      setProducts((prev) => ({ ...prev, [jsonResponse.cursor]: data }));
      setLatestCursor(jsonResponse.cursor);
      console.log(jsonResponse);
    } catch (error) {
      console.error(error);
    }
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
      <button
        onClick={onButtonClick}
        disabled={latestCursor == null}
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600"
      >
        Click Me
      </button>
    </>
  );
}
