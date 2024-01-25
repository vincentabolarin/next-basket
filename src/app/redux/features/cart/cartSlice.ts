"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartState {
  data: Array<Products>;
  count: number;
}

const initialState: CartState = {
  data: [],
  count: 0
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Products>) => {
      state.data.push(action.payload);
      state.count++;
    },
    removeItem: (state, action: PayloadAction<Products>) => {
      state.data.filter(data => data !== action.payload);
      state.count--;
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;