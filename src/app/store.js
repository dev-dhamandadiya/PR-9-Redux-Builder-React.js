import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/Products/ProductSlice.js";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});