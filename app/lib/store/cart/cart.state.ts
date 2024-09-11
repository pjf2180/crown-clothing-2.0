import { CartItemModel } from "../../models/cartItem.models";

export type CartState = {
  items: CartItemModel[];
};
export function getInitialState() {
  const state: CartState = {
    items: [],
  };
  return state;
}
