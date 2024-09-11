"use client";
import { CartItemModel } from "../lib/models/cartItem.models";
import { cartItemsSelector, cartTotalSelector } from "../lib/store/cart/cart.selectors";
import { useAppSelector } from "../lib/store/hooks";
import { CheckoutItemContainer as CheckoutItem } from "../ui/checkout-item/checkout-item.container";

export function CheckoutItems() {
  const cart = useAppSelector(cartItemsSelector);
  const total = useAppSelector(cartTotalSelector);

  return (
    <>
      {cart.map((cartItem: CartItemModel) => (
        <CheckoutItem key={cartItem.id} item={cartItem}></CheckoutItem>
      ))}
      <div className="mt-[30px] text-[36px] flex justify-end">Total: ${total}</div>
    </>
  );
}
