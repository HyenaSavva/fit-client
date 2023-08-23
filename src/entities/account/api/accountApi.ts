import { type AccountProps } from "../model/types";
import { baseApi } from "shared/api";

export const accountApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAccount: build.mutation<void, AccountProps>({
      query: (account) => ({
        url: "account",
        method: "POST",
        body: account,
      }),
    }),
    getAccount: build.query<AccountProps, string>({
      query: (accountId) => `account/${accountId}`,
    }),
    getAllAccounts: build.query<AccountProps[], void>({
      query: () => ({ url: "account" }),
    }),
    updateAccount: build.mutation<
      void,
      { accountId: string; account: AccountProps }
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
