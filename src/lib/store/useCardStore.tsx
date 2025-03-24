import { create } from "zustand";

interface Card {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface CardStore {
  cards: Card[];
  addCard: (card: Card) => void;
  removeCard: (id: number) => void;
}

export const useCardStore = create<CardStore>((set) => ({
  cards: [],
  addCard: (card) => set((state) => ({ cards: [...state.cards, card] })),
  removeCard: (id) =>
    set((state) => ({ cards: state.cards.filter((c) => c.id !== id) })),
}));
