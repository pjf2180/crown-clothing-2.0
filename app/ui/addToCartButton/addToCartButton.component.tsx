"use client";
import { CollectionItemModel } from "@/app/lib/models/collectionItem.models";
import { AddItemToCartThunk } from "@/app/lib/store/cart/cart.thunks";
import { useAppDispatch } from "@/app/lib/store/hooks";
import { useSession } from "next-auth/react";
import { AppButton } from "../button/Button";

export interface AddToCartButtonProps {
  item: CollectionItemModel;
}
export function AddToCartButton({ item }: AddToCartButtonProps) {
  const dispatch = useAppDispatch();
  const { data } = useSession();
  const userId = data?.user?.id as string;
  return (
    <AppButton
      className="w-[80%] opacity-[1] absolute top-[255px] md:opacity-0 group-hover:opacity-[1.0]"
      onClick={() => {
        dispatch(AddItemToCartThunk({ item }));
      }}
    >
      Add to Cart
    </AppButton>
  );
}
