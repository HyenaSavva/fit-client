import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICard } from "shared/types/ICard";
import { nanoid } from "nanoid";

interface CardState {
  cards: ICard[];
}

const initialState: CardState = { cards: [] };

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    createCard(state, action: PayloadAction<ICard>) {
      state.cards.push({
        ...action.payload,
        id: nanoid(),
      });
    },
    deleteCard(state, action: PayloadAction<string>) {
      state.cards.filter((card) => card.id !== action.payload);
    },
    updateCard(state, action: PayloadAction<ICard>) {
      const updatedCard = action.payload;
      state.cards = state.cards.map((card) =>
        card.id === updatedCard.id ? updatedCard : card
      );
    },
  },
});

export const { createCard, deleteCard, updateCard } = cardSlice.actions;
export default cardSlice.reducer;
