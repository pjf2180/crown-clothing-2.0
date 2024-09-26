import { CartItemModel } from "../../models/cartItem.models";
import {
  AddItemFromCartActionType,
  ClearItemFromCartActionType,
  RemoveItemFromCartActionType,
  SetCartItemsActionType,
} from "./cart.actions";
import { CartState } from "./cart.state";

export function addItemToCart(
  cartState: CartState,
  action: AddItemFromCartActionType
): void {
  const existingItem = cartState.items.find((i) => {
    console.log(i.id, i.name);
    return i.id === action.payload.id;
  });
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const newCartItem: CartItemModel = { ...action.payload, quantity: 1 };
    cartState.items.push(newCartItem);
  }
}

export function removeItemFromCart(
  cartState: CartState,
  action: RemoveItemFromCartActionType
) {
  const existingItem = cartState.items.find((i) => {
    console.log(i.id, i.name);
    return i.id === action.payload.id;
  });
  if (existingItem?.quantity === 1) {
    return clearItemFromCart(cartState, action);
  } else if (existingItem) {
    existingItem.quantity -= 1;
  }
}

export function clearItemFromCart(
  cartState: CartState,
  action: ClearItemFromCartActionType
): CartState {
  return {
    ...cartState,
    items: cartState.items.filter((item) => item.id !== action.payload.id),
  };
}

export function setCart(
  cartState: CartState,
  action: SetCartItemsActionType
): void {
  cartState.items = action.payload;
}
