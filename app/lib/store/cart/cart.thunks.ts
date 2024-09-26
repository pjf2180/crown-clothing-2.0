import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartItemModel } from "../../models/cartItem.models";
import {
  AddItemToCartAction,
  ClearItemFromCartAction,
  RemoveItemFromCartAction,
  SetCartItemsAction,
} from "./cart.actions";
import { CollectionItemModel } from "../../models/collectionItem.models";
import {
  deleteItemFromCartAction,
  getUserCart,
  postItemToCartAction,
  updateItemQuantityRequest,
} from "../../clientApi/cart/cartApi";

export const FetchUserCartThunk = createAsyncThunk(
  "cart/fetchUserCart",
  async (userId: string, thunkAPI) => {
    const response = await getUserCart();
    const { dispatch } = thunkAPI;
    dispatch(SetCartItemsAction(response));
  }
);

export const AddItemToCartThunk = createAsyncThunk(
  "cart/addItemToCart",
  async (arg: { item: CollectionItemModel }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { item } = arg;
    dispatch(AddItemToCartAction(item));
    const response = await postItemToCartAction(item.id as number);
    return response;
  }
);

export const DeleteItemFromCartThunk = createAsyncThunk(
  "cart/addItemToCart",
  async (arg: { item: CollectionItemModel }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { item } = arg;
    dispatch(ClearItemFromCartAction(item));
    deleteItemFromCartAction(item.id as number);
  }
);

export const IncreaseItemQuantityThunk = createAsyncThunk(
  "cart/IncreaseItemQuantity",
  async (arg: { item: CartItemModel }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { item } = arg;
    dispatch(AddItemToCartAction(item));
    updateItemQuantityRequest(item.id as number, item.quantity + 1);
  }
);

export const DecreaseItemQuantityThunk = createAsyncThunk(
  "cart/decreaseItemQuantity",
  async (arg: { item: CartItemModel }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { item } = arg;
    dispatch(RemoveItemFromCartAction(item));
    updateItemQuantityRequest(item.id as number, item.quantity - 1);
  }
);
