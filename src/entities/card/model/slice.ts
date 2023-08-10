import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardProps } from "./types";
import { nanoid } from "nanoid";

interface CardState {
  cards: CardProps[];
}

const initialState: CardState = { cards: [] };

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    createCard(state, action: PayloadAction<CardProps>) {
      state.cards.push({
        ...action.payload,
        id: nanoid(),
      });
    },
    deleteCard(state, action: PayloadAction<string>) {
      state.cards.filter((card) => card.id !== action.payload);
    },
    updateCard(state, action: PayloadAction<CardProps>) {
      const updatedCard = action.payload;
      state.cards = state.cards.map((card) =>
        card.id === updatedCard.id ? updatedCard : card
      );
    },
  },
});

export const { createCard, deleteCard, updateCard } = cardSlice.actions;
