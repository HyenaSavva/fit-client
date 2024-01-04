import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { sessionApi } from "../api/sessionApi";
import { SigninResponse } from "..";

interface SessionState {
  token: SigninResponse | null;
  isAuthorized?: boolean;
}

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    token: null,
    isAuthorized: false,
  } as SessionState,
  reducers: {
    setCredentials: (
      state,
      { payload: { token } }: PayloadAction<SessionState>
    ) => {
      state.token = token;
      state.isAuthorized = true;
    },
    clearSessionData: (state) => {
      state.token = null;
      state.isAuthorized = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      sessionApi.endpoints.signin.matchFulfilled,
      (state, { payload: token }) => {
        state.token = token;
      }
    );
  },
});

const selectCurrentUser = (state: RootState) => state.session.token;
const selectIsAuthorized = (state: RootState) => state.session.isAuthorized;

export const { setCredentials, clearSessionData } = sessionSlice.actions;
export const selectAuthorization = createSelector(
  [selectCurrentUser, selectIsAuthorized],
  (token, isAuthorized) => ({ token, isAuthorized })
);
