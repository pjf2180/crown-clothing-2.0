"use client";
import { CollectionItemModel } from "@/app/lib/models/collectionItem.models";
import { AddItemToCartAction } from "@/app/lib/store/cart/cart.actions";
import { AddItemToCartThunk } from "@/app/lib/store/cart/cart.thunks";
import { useAppDispatch } from "@/app/lib/store/hooks";
import { useSession } from "next-auth/react";

export interface AddToCartButtonProps {
  item: CollectionItemModel;
}
export function AddToCartButton({ item }: AddToCartButtonProps) {
  const dispatch = useAppDispatch();
  const { data } = useSession();
  const userId = data?.user?.id as string;
  return (
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
        dispatch(AddItemToCartThunk({ userId, item }));
      }}
    >
      Add to Cart
    </button>
  );
}
