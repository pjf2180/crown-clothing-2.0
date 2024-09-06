'use client';
import { CollectionItemModel } from "@/app/lib/models/collectionItem.models";

export interface CollectionItemProps {
  item: CollectionItemModel;
}
export function CollectionItem({ item }: CollectionItemProps) {
  const { name, price, imageUrl } = item;
  return (
    <div className="flex flex-col h-[350px] items-center relative justify-center w-full group">
      <div
        className="w-full h-[95%] bg-cover bg-center mb-[5px] transition-opacity duration-300 group-hover:opacity-80"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="w-full h-[5%] flex justify-between text-[18px] px-[5px]">
        <span className="mb-[15px]">{name}</span>
        <span className="w-[10%]">{price}</span>
      </div>
      <button
        className={`
            h-[50px] 
            tracking-[0.5px] 
            leading-[50px] 
            text-[15px] 
            uppercase 
            font-bold 
            cursor-pointer 
            justify-center 
            items-center 
            bg-white 
            text-black 
            border 
            border-black 
            hover:bg-black 
            hover:text-white
            hover:border-none  
            w-[80%] 
            opacity-[0.7] 
            absolute 
            top-[255px]  
            group-hover:flex 
            group-hover:opacity-[0.85] 
            sm:opacity-100 
          `}
        onClick={() => {}}
      >
        Add to Cart
      </button>
    </div>
  );
}
