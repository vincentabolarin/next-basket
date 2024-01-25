"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface CartCounterState {
  count: number;
}

const initialState: CartCounterState = {
  count: 0
}

export const cartCounterSlice = createSlice({
  name: "cartCounter",
  initialState,
  reducers: {
    increment: (state) => { state.count += 1 },
    decrement: (state) => { state.count -= 1 }
  }
});

export const { increment, decrement } = cartCounterSlice.actions;

export default cartCounterSlice.reducer;