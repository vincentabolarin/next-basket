"use client";

import { useEffect } from "react";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartState {
  data: Array<Products>;
}

const initialState: CartState = {
  data: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Products>) => {
      state.data.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<Products>) => {
      state.data = state.data.filter(data => data !== action.payload);
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;