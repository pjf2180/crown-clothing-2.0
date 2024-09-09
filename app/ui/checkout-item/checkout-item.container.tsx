'use client'
import { CartItemModel } from "@/app/lib/models/cartItem.models";
import { CheckoutItem } from "./checkout-item";

export function CheckoutItemContainer({ item }: { item: CartItemModel }) {
  const onAddItem = () => {};
  const onRemoveItem = () => {};
  const onClearItem = () => {};

  return (
    <CheckoutItem
      item={item}
      addItem={onAddItem}
      removeItem={onRemoveItem}
      clearCartItem={onClearItem}
    ></CheckoutItem>
  );
}
