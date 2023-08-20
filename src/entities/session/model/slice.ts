import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { type User } from "entities/user";

interface SessionState {
  user: User | null;
  token: string | null;
  isAuthorized?: boolean;
}

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    user: null,
    token: null,
    isAuthorized: false,
  } as SessionState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<SessionState>
    ) => {
      state.user = user;
      state.token = token;
      state.isAuthorized = true;
    },
    clearSessionData: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthorized = false;
    },
  },
});

const selectCurrentUser = (state: RootState) => ({
  user: state.session.user,
  token: state.session.token,
});
const selectIsAuthorized = (state: RootState) => state.session.isAuthorized;

export const { setCredentials, clearSessionData } = sessionSlice.actions;
export const selectAuthorization = createSelector(
  [selectCurrentUser, selectIsAuthorized],
  ({ user, token }, isAuthorized) => ({
    user,
    token,
    isAuthorized,
  })
);
