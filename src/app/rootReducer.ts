import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "shared/api";
import { productSlice } from "entities/product";
import { selectSlice } from "entities/select";
import { sessionSlice } from "entities/session";
import { userSlice } from "entities/user";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [sessionSlice.name]: sessionSlice.reducer,
  [productSlice.name]: productSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [selectSlice.name]: selectSlice.reducer,
});

export const persistWhitelist = [sessionSlice.name, userSlice.name];
