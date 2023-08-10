import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type User } from "entities/user";
import { RootState } from "shared/model";

interface AuthState {
  user: User | null;
  token: string | null;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<AuthState>
    ) => {
      state.user = user;
      state.token = token;
    },
    clearSessionData: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export const selectCurrentUser = (state: RootState) => state.auth.user;
