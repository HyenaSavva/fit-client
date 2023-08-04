import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import postReducer from "./reducers/PostSlice";
import cardReducer from "./reducers/CardSlice";
import { postAPI } from "examples/api/PostService";
import { cardAPI } from "examples/api/CardService";

const rootReducer = combineReducers({
  userReducer: userReducer,
  postReducer: postReducer,
  cardReducer: cardReducer,
  [postAPI.reducerPath]: postAPI.reducer,
  [cardAPI.reducerPath]: cardAPI.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postAPI.middleware)
      .concat(cardAPI.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
