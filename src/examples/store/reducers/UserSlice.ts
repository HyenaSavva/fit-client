import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "shared/types/IUser";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    usersFetchingAction(state) {
      state.isLoading = true;
    },
    usersFetchingSuccessAction(state, action: PayloadAction<IUser[]>) {
      state.error = "";
      state.isLoading = false;
      state.users = action.payload;
    },
    usersFetchingErrorAction(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
