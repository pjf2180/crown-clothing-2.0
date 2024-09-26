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
    const response = await getUserCart(userId);
    const { dispatch } = thunkAPI;
    dispatch(SetCartItemsAction(response));
  }
);

export const AddItemToCartThunk = createAsyncThunk(
  "cart/addItemToCart",
  async (arg: { userId: string; item: CollectionItemModel }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { userId, item } = arg;
    dispatch(AddItemToCartAction(item));
    const response = await postItemToCartAction(userId, item.id as number);
    return response;
  }
);

export const DeleteItemFromCartThunk = createAsyncThunk(
  "cart/addItemToCart",
  async (arg: { userId: string; item: CollectionItemModel }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { userId, item } = arg;
    dispatch(ClearItemFromCartAction(item));
    deleteItemFromCartAction(userId, item.id as number);
  }
);

export const IncreaseItemQuantityThunk = createAsyncThunk(
  "cart/IncreaseItemQuantity",
  async (arg: { userId: string; item: CartItemModel }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { userId, item } = arg;
    dispatch(AddItemToCartAction(item));
    updateItemQuantityRequest(userId, item.id as number, item.quantity + 1);
  }
);

export const DecreaseItemQuantityThunk = createAsyncThunk(
  "cart/decreaseItemQuantity",
  async (arg: { userId: string; item: CartItemModel }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { userId, item } = arg;
    dispatch(RemoveItemFromCartAction(item));
    updateItemQuantityRequest(userId, item.id as number, item.quantity - 1);
  }
);


