import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { envVariables } from "shared/lib";
import { ICard } from "shared/types/ICard";

export const cardAPI = createApi({
  reducerPath: "cardAPI",
  baseQuery: fetchBaseQuery({ baseUrl: envVariables.API_ENDPOINT }),
  tagTypes: ["Card"],
  endpoints: (build) => ({
    fetchAllCards: build.query<ICard[], void>({
      query: () => ({
        url: "/cards",
      }),
      providesTags: () => ["Card"],
    }),
    createCard: build.mutation<void, ICard>({
      query: (card) => ({
        url: "/cards",
        method: "post",
        body: card,
      }),
      invalidatesTags: () => ["Card"],
    }),
  }),
});
