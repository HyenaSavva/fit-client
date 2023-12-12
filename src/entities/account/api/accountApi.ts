import { type Account } from "../model/types";
import { baseApi } from "shared/api";

export const accountApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAccount: build.mutation<void, Account>({
      query: (account) => ({
        url: "account",
        method: "POST",
        body: account,
      }),
    }),
    getAccount: build.query<Account, string>({
      query: (accountId) => `account/${accountId}`,
    }),
    getAllAccounts: build.query<Account[], void>({
      query: () => ({ url: "accounts" }),
    }),
    updateAccount: build.mutation<
      void,
      { accountId: string; account: Account }
    >({
      query: ({ account, accountId }) => ({
        url: `account/${accountId}`,
        method: "PUT",
        body: account,
      }),
    }),
    deleteAccount: build.mutation<void, string>({
      query: (accountId) => ({
        url: `account/${accountId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
  useGetAllAccountsQuery,
  useGetAccountQuery,
} = accountApi;
