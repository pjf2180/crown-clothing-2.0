import { configureStore, createSelector} from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cart.reducer";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const createAppSelector = createSelector.withTypes<RootState>();