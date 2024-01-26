"use client";

import { useEffect } from "react";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface WishlistState {
  data: Array<Products>;
}
  
const initialState: WishlistState = {
  data: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Products>) => {
      state.data.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<Products>) => {
      state.data = state.data.filter((data) => data.id !== action.payload.id && data.title !== action.payload.title);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
