import axios from "axios";
import { IUser } from "shared/types/IUser";
import { AppDispatch } from "examples/store/store";
import { userSlice } from "./UserSlice";

export const fetchUsers = async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetchingAction());
    const response = await axios.get<IUser[]>(
      `${import.meta.env.BASE_URL}users`
    );
    dispatch(userSlice.actions.usersFetchingSuccessAction(response.data));
  } catch (err) {
    if (err instanceof Error) {
      dispatch(userSlice.actions.usersFetchingErrorAction(err.message));
    }
  }
};

export const fetchUserCards = async (dispatch: AppDispatch) => {
  try {
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    }
  }
};
