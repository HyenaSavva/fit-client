import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "entities/product";

const initialState: ProductProps = {
  productName: "",
  proteins: 0,
  carbohydrates: 0,
  calories: 0,
  fats: 0,
  gramms: 0,
};

export const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    select(state, action) {
      state = action.payload;
    },
    deselect(state) {
      state = initialState;
    },
  },
});

export const selectSelector = (state: RootState) => state.select;
export const { select, deselect } = selectSlice.actions;
