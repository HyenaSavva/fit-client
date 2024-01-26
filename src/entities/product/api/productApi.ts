import { type ProductProps } from "../model/types";
import { baseApi } from "shared/api";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation<ProductProps, ProductProps>({
      query: (data) => ({
        url: `product`,
        method: `POST`,
        body: data,
      }),
    }),
    getProduct: build.query<ProductProps, string>({
      query: (productId) => `product/${productId}`,
    }),
    getAllProducts: build.query<ProductProps[], void>({
      query: () => ({ url: `product/all` }),
    }),
    updateProduct: build.mutation<
      void,
      { productId: string; product: ProductProps }
    >({
      query: ({ product, productId }) => ({
        url: `product/${productId}`,
        method: `PUT`,
        body: product,
      }),
    }),
    deleteProduct: build.mutation<void, string>({
      query: (productId) => ({
        url: `product/${productId}`,
        method: `DELETE`,
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetAllProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
