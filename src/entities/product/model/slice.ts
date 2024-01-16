import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "./types";

interface ProductState {
  products: ProductProps[];
}

const initialState: ProductState = { products: [] };

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProduct(state, action: PayloadAction<ProductProps>) {
      state.products.push({ ...action.payload });
    },
    deleteProduct(state, action: PayloadAction<string>) {
      state.products.filter(
        ({ accountNumber }) => accountNumber !== action.payload //
      );
    },
  },
});

export const { createProduct, deleteProduct } = productSlice.actions;
