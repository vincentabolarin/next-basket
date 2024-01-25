"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartCounterReducer from "./features/cartCounter/cartCounterSlice";

export const store = configureStore({
  reducer: {
    cartCounter: cartCounterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;