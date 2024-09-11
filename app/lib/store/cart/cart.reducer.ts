import { createReducer } from "@reduxjs/toolkit";
import {
  AddItemToCartAction,
  ClearItemFromCartAction,
  RemoveItemFromCartAction,
} from "./cart.actions";
import { getInitialState } from "./cart.state";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "./cart.utils";

export const cartReducer = createReducer(getInitialState(), (builder) => {
  builder.addCase(AddItemToCartAction, addItemToCart);
  builder.addCase(RemoveItemFromCartAction, removeItemFromCart);
  builder.addCase(ClearItemFromCartAction, clearItemFromCart);
});
