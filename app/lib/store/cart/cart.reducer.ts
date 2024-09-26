import { createReducer } from "@reduxjs/toolkit";
import {
  AddItemToCartAction,
  ClearItemFromCartAction,
  RemoveItemFromCartAction,
  SetCartItemsAction,
} from "./cart.actions";
import { getInitialState } from "./cart.state";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  setCart,
} from "./cart.utils";

export const cartReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(AddItemToCartAction, addItemToCart);
  builder.addCase(RemoveItemFromCartAction, removeItemFromCart);
  builder.addCase(ClearItemFromCartAction, clearItemFromCart);
  builder.addCase(SetCartItemsAction, setCart);
});
