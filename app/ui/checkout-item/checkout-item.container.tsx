"use client";
import { CartItemModel } from "@/app/lib/models/cartItem.models";
import { CheckoutItem } from "./checkout-item.component";
import { useAppDispatch } from "@/app/lib/store/hooks";
import {
  AddItemToCartAction,
  ClearItemFromCartAction,
  RemoveItemFromCartAction,
} from "@/app/lib/store/cart/cart.actions";

export function CheckoutItemContainer({ item }: { item: CartItemModel }) {
  const dispatch = useAppDispatch();

  const onAddItem = () => {
    dispatch(AddItemToCartAction(item));
  };
  const onRemoveItem = () => {
    dispatch(RemoveItemFromCartAction(item));
  };
  const onClearItem = () => {
    dispatch(ClearItemFromCartAction(item));
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
