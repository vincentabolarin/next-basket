"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import wishlistReducer from "./features/wishlist/wishlistSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfigCart = {
  key: "cart",
  storage,
};

const persistConfigWishlist = {
  key: "wishlist",
  storage,
};

const persistedCartReducer = persistReducer(persistConfigCart, cartReducer);
const persistedWishlistReducer = persistReducer(
  persistConfigWishlist,
  wishlistReducer
);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    wishlist: persistedWishlistReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;