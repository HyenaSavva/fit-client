import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AccountProps } from "./types";

interface AccountState {
  accounts: AccountProps[];
}

const initialState: AccountState = { accounts: [] };

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    createAccount(state, action: PayloadAction<AccountProps>) {
      state.accounts.push({ ...action.payload });
    },
    deleteAccount(state, action: PayloadAction<string>) {
      state.accounts.filter(
        ({ accountNumber }) => accountNumber !== action.payload
      );
    },
  },
});

export const { createAccount, deleteAccount } = accountSlice.actions;
