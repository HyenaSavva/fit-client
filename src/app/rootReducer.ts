import { combineReducers } from "@reduxjs/toolkit";
import { cardSlice } from "entities/card";
import { sessionSlice } from "entities/session";
import { baseApi } from "shared/api";

export const rootReducer = combineReducers({
  [cardSlice.name]: cardSlice.reducer,
  [sessionSlice.name]: sessionSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
