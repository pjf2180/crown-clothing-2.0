"use client";
import { CollectionItemModel } from "@/app/lib/models/collectionItem.models";
import { AddItemToCartAction } from "@/app/lib/store/cart/cart.actions";
import { useDispatch } from "react-redux";

export interface CollectionItemProps {
  item: CollectionItemModel;
}
export function CollectionItem({ item }: CollectionItemProps) {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

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
            w-[80%] 
            opacity-[1] 
            absolute 
            top-[255px]  
            group-hover:opacity-[1.0] 
            md:opacity-0
          `}
        onClick={() => {
          dispatch(AddItemToCartAction(item));
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
