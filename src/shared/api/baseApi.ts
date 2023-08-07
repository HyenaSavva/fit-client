import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { envVariables } from "shared/lib";
import { CARD_TAG } from "./tags";

export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: [CARD_TAG],
  baseQuery: fetchBaseQuery({ baseUrl: envVariables.API_ENDPOINT }),
  endpoints: () => ({}),
});
