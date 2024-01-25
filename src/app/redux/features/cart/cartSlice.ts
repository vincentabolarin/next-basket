"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartState {
  data: Array<Products>;
}

const currentCartItems = JSON.parse(localStorage.getItem("current_cart_items")!);

const initialState: CartState = {
  data: currentCartItems || [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Products>) => {
      state.data.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<Products>) => {
      state.data.filter(data => data !== action.payload);
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;