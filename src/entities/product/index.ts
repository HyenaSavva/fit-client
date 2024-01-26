export { useProductFormValidation } from "./lib/useProductFormValidation";
export {
  productSlice,
  createProduct,
  deleteProduct,
  setProducts,
  selectProducts,
} from "./model/slice";
export type { Inputs, ProductProps } from "./model/types";
export {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useGetProductQuery,
} from "./api/productApi";

export { useCreateProductHandler } from "./api/useCreateProductHandler";
export { Account } from "./ui/Account";
