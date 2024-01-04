import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { config } from "shared/lib";
import { CARD_TAG } from "./tags";

export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: [CARD_TAG],
  baseQuery: fetchBaseQuery({
    baseUrl: config.API_ENDPOINT,
    prepareHeaders: (headers, { getState }) => {
      const { session } = getState() as RootState;
      const token = session.token;
      console.log(token);

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
    credentials: "include",
  }),
  endpoints: () => ({}),
});
