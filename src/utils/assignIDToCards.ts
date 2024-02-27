import { nanoid } from 'nanoid'

export const assignIDToCards = (cards: any[]) => {
  return cards.map((card: any) => ({
    ...card,
    id: nanoid(),
  }));
};