import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const cartItemsSelector = createSelector(
  (appState: RootState) => appState.cart,
  (cartState) => cartState.items
);

export const cartTotalSelector = createSelector(
  [cartItemsSelector],
  (cartItems) =>
    cartItems.reduce(
      (accum, current) => accum + current.price * current.quantity,
      0
    )
);
