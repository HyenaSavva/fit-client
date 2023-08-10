import { baseApi, CARD_TAG } from "shared/api";
import { type CardProps } from "../model/types";

export const cardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchAllCards: build.query<CardProps[], void>({
      query: () => ({ url: `/cards` }),
      providesTags: [CARD_TAG],
    }),
    updateCard: build.mutation<CardProps, CardProps>({
      query: (card) => ({
        url: `/cards`,
        method: "PATCH",
        body: card,
      }),
      invalidatesTags: [CARD_TAG],
    }),
    createCard: build.mutation<void, CardProps>({
      query: (card) => ({
        url: "/cards",
        method: "POST",
        body: card,
      }),
      invalidatesTags: [CARD_TAG],
    }),
  }),
});
