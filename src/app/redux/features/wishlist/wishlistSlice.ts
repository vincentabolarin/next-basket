"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface WishlistState {
  data: Array<Products>;
  count: number;
}

const initialState: WishlistState = {
  data: [],
  count: 0,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Products>) => {
      state.data.push(action.payload);
      state.count++;
    },
    removeFromWishlist: (state, action: PayloadAction<Products>) => {
      state.data.filter((data) => data !== action.payload);
      state.count--;
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
