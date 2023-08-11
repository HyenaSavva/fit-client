import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type User } from "entities/user";

interface SessionState {
  user: User | null;
  token: string | null;
}

export const sessionSlice = createSlice({
  name: "session",
  initialState: { user: null, token: null } as SessionState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<SessionState>
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

export const { setCredentials, clearSessionData } = sessionSlice.actions;
export const selectCurrentUser = (state: RootState) => state.session.user;
