import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardProps } from "./types";

interface CardState {
  cards: CardProps[];
}

const initialState: CardState = { cards: [] };

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    createCard(state, action: PayloadAction<CardProps>) {
      state.cards.push({ ...action.payload });
    },

    deleteCard(state, action: PayloadAction<string>) {
      state.cards.filter((card) => card.cardNumber !== action.payload);
    },

    updateCard(state, action: PayloadAction<CardProps>) {
      const updatedCard = action.payload;
      state.cards = state.cards.map((card) =>
        card.cardNumber === updatedCard.cardNumber ? updatedCard : card
      );
    },
  },
});

export const { createCard, deleteCard, updateCard } = cardSlice.actions;
