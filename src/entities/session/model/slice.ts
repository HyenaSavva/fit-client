import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
};

interface sessionState {
  user: User | null;
  addUser: (user: User) => void;
  deleteUser: () => void;
}

const initialState: sessionState = {
  user: null,
  addUser: () => {},
  deleteUser: () => {},
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<sessionState>) => {
      state.user = action.payload.user;
    },
  },
});

export const { addUser } = sessionSlice.actions;
export default sessionSlice.reducer;
