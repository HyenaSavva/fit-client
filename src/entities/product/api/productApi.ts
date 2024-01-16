import { type ProductProps } from "../model/types";
import { baseApi } from "shared/api";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation<void, ProductProps>({
      query: (account) => ({
        url: "account",
        method: "POST",
        body: account,
      }),
    }),
    getAccount: build.query<ProductProps, string>({
      query: (accountId) => `account/${accountId}`,
    }),
    getAllAccounts: build.query<ProductProps[], void>({
      query: () => ({ url: "accounts" }),
    }),
    updateAccount: build.mutation<
      void,
      { accountId: string; account: ProductProps }
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
    getUsers: build.query<object[], void>({
      query: () => `/user/all`,
    }),
  }),
});

export const {
  useCreateProductMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
  useGetAllAccountsQuery,
  useGetAccountQuery,
  useGetUsersQuery,
} = productApi;
