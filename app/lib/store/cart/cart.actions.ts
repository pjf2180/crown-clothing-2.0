import { createAction } from "@reduxjs/toolkit";
import { CollectionItemModel } from "../../models/collectionItem.models";
import { CartItemModel } from "../../models/cartItem.models";

export const AddItemToCartAction =
  createAction<CollectionItemModel>("ADD_ITEM_TO_CART");
export type AddItemFromCartActionType = ReturnType<typeof AddItemToCartAction>;

export const RemoveItemFromCartAction = createAction<CollectionItemModel>(
  "REMOVE_ITEM_FROM_CART"
);
export type RemoveItemFromCartActionType = ReturnType<typeof RemoveItemFromCartAction>;

export const ClearItemFromCartAction = createAction<CollectionItemModel>(
  "CLEAR_ITEM_FROM_CART"
);
export type ClearItemFromCartActionType = ReturnType<typeof ClearItemFromCartAction>;

export const SetCartItemsAction = createAction<CartItemModel[]>(
  "SET_CART_ITEMS"
);
export type SetCartItemsActionType = ReturnType<typeof SetCartItemsAction>;
