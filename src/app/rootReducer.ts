import { combineReducers } from "@reduxjs/toolkit";
import { productSlice } from "entities/product";
import { sessionSlice } from "entities/session";
import { userSlice } from "entities/user";
import { baseApi } from "shared/api";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [sessionSlice.name]: sessionSlice.reducer,
  [productSlice.name]: productSlice.reducer,
  [userSlice.name]: userSlice.reducer,
});

export const persistWhitelist = [sessionSlice.name, userSlice.name];
