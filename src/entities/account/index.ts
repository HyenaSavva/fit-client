export { accountSlice, createAccount, deleteAccount } from "./model/slice";
export {
  useCreateAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
  useGetAllAccountsQuery,
  useGetAccountQuery,
} from "./api/accountApi";
