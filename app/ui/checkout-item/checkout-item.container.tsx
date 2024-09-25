"use client";
import { CartItemModel } from "@/app/lib/models/cartItem.models";
import { CheckoutItem } from "./checkout-item.component";
import { useAppDispatch } from "@/app/lib/store/hooks";

import {
  DecreaseItemQuantityThunk,
  DeleteItemFromCartThunk,
  IncreaseItemQuantityThunk,
} from "@/app/lib/store/cart/cart.thunks";
import { useSession } from "next-auth/react";

export function CheckoutItemContainer({ item }: { item: CartItemModel }) {
  const { data } = useSession();
  const userId = data?.user?.id as string;
  const dispatch = useAppDispatch();

  const onAddItem = () => {
    dispatch(IncreaseItemQuantityThunk({ item, userId }));
  };
  const onRemoveItem = () => {
    dispatch(DecreaseItemQuantityThunk({ item, userId }));
  };
  const onClearItem = () => {
    dispatch(DeleteItemFromCartThunk({ item, userId }));
  };

  return (
    <CheckoutItem
      item={item}
      addItem={onAddItem}
      removeItem={onRemoveItem}
      clearCartItem={onClearItem}
    ></CheckoutItem>
  );
}
