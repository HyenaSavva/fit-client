import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { User } from "..";

interface UserState {
  user?: User | null;
  isNew: boolean;
  isAuthorized?: boolean;
}

const initialState: UserState = {
  user: null,
  isNew: true,
  isAuthorized: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<UserState>) => {
      state.user = payload.user;
      state.isAuthorized = true;
      state.isNew = payload.isNew;
    },
    setIsNew: (state) => {
      state.isNew = !state.isNew;
    },
    clearUserData: (state) => {
      state.user = null;
      state.isAuthorized = false;
    },
  },
});

const selectCurrentUser = (state: RootState) => state.user.user;
const selectIsAuthorized = (state: RootState) => state.user.isAuthorized;
const selectIsNew = (state: RootState) => state.user.isNew;

export const selectUserData = createSelector(
  [selectCurrentUser, selectIsAuthorized, selectIsNew],
  (user, isAuthorized, isNew) => ({ user, isAuthorized, isNew })
);
export const { setUser, setIsNew, clearUserData } = userSlice.actions;
