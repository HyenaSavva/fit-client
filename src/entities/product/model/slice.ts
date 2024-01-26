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
    setProducts(state, action: PayloadAction<ProductProps[]>) {
      state.products = action.payload;
    },
    createProduct(state, action: PayloadAction<ProductProps>) {
      state.products.push({ ...action.payload });
    },
    deleteProduct(state, action: PayloadAction<string>) {
      state.products.filter(
        ({ id }) => id !== action.payload //
      );
    },
  },
});

export const selectProducts = (state: RootState) => state.product.products;
export const { createProduct, deleteProduct, setProducts } =
  productSlice.actions;
