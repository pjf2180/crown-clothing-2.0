"use client";
import { CartItemModel } from "@/app/lib/models/cartItem.models";
import { CheckoutItem } from "./checkout-item.component";
import { useAppDispatch } from "@/app/lib/store/hooks";

import {
  DecreaseItemQuantityThunk,
  DeleteItemFromCartThunk,
  IncreaseItemQuantityThunk,
} from "@/app/lib/store/cart/cart.thunks";

export function CheckoutItemContainer({ item }: { item: CartItemModel }) {

  const dispatch = useAppDispatch();

  const onAddItem = () => {
    dispatch(IncreaseItemQuantityThunk({ item }));
  };
  const onRemoveItem = () => {
    dispatch(DecreaseItemQuantityThunk({ item }));
  };
  const onClearItem = () => {
    dispatch(DeleteItemFromCartThunk({ item }));
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
