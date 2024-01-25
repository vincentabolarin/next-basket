"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface WishlistState {
  data: Array<Products>;
}

let currentWishlistItems

// if (typeof window !== "undefined") {
  currentWishlistItems = JSON.parse(
    window?.localStorage?.getItem("current_wishlist_items")!
  );
// }

const initialState: WishlistState = {
  data: currentWishlistItems ? currentWishlistItems : [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Products>) => {
      state.data.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<Products>) => {
      state.data.filter((data) => data !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
