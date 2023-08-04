import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { CARD_TAG } from "./tags";

export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: [CARD_TAG],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: () => ({}),
});
