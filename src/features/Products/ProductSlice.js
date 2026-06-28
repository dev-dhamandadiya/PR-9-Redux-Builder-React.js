import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products"
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const ProductSlice = createSlice({
  name: "product",

  initialState: {
    product: [],
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      fetchProduct.fulfilled,
      (state, action) => {
        state.product = action.payload.products;
      }
    );
  },
});

export default ProductSlice.reducer;