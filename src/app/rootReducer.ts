import { combineReducers } from "@reduxjs/toolkit";
import { sessionSlice } from "entities/session";
import { accountSlice } from "entities/account";
import { cardSlice } from "entities/card";
import { baseApi } from "shared/api";

export const rootReducer = combineReducers({
  [cardSlice.name]: cardSlice.reducer,
  [sessionSlice.name]: sessionSlice.reducer,
  [accountSlice.name]: accountSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export const whitelist = [sessionSlice.name, cardSlice.name];
