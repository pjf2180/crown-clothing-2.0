import {
  combineReducers,
  configureStore,
  createSelector,
} from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

export const makeStore = () => {
  const reducers = {
    cart: cartReducer,
  };
  const combinedReducers = combineReducers(reducers);
  const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, combinedReducers);

  const store = configureStore({
    reducer: persistedReducer,
  });

  return store;
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const createAppSelector = createSelector.withTypes<RootState>();