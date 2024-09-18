import { CollectionItemModel } from "@/app/lib/models/collectionItem.models";
import { AddToCartButton } from "../addToCartButton/addToCartButton.component";

export interface CollectionItemProps {
  item: CollectionItemModel;
}
export function CollectionItem({ item }: CollectionItemProps) {
  const { name, price, imageUrl } = item;

  return (
    <div className="flex flex-col h-[350px] items-center relative justify-center w-full group pb-3">
      <div
        className="w-full h-[95%] bg-cover bg-center mb-[5px] transition-opacity duration-300 group-hover:opacity-80"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="w-full h-[5%] flex justify-between text-[18px] px-[5px]">
        <span className="mb-[15px]">{name}</span>
        <span className="w-[10%]">{price}</span>
      </div>
      <AddToCartButton item={item} />
    </div>
  );
}
