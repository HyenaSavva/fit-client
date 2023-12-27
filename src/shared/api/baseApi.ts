import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { config } from "shared/lib";
import { CARD_TAG } from "./tags";

export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: [CARD_TAG],
  baseQuery: fetchBaseQuery({
    baseUrl: config.API_ENDPOINT,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).session.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: () => ({}),
});
