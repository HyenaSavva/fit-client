import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { envVariables } from "shared/lib";
import { RootState } from "shared/model";
import { CARD_TAG } from "./tags";

export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: [CARD_TAG],
  baseQuery: fetchBaseQuery({
    baseUrl: envVariables.API_ENDPOINT,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: () => ({}),
});
