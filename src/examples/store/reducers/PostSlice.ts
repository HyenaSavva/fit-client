import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "shared/types/IPost";

type PostState = {
  post: IPost[];
};

const initialState: PostState = {
  post: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    createPost(state, action: PayloadAction<string>) {
      state.post.push({
        id: new Date().toISOString(),
        title: action.payload,
      });
    },
  },
});

export const { createPost } = postSlice.actions;
export default postSlice.reducer;
