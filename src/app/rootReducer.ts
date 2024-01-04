import { combineReducers } from "@reduxjs/toolkit";
import { sessionSlice } from "entities/session";
import { accountSlice } from "entities/account";
import { cardSlice } from "entities/card";
import { baseApi } from "shared/api";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [cardSlice.name]: cardSlice.reducer,
  [sessionSlice.name]: sessionSlice.reducer,
  [accountSlice.name]: accountSlice.reducer,
});

export const whitelist = [sessionSlice.name, cardSlice.name];
