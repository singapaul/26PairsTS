import { nanoid } from 'nanoid'

// @ts-ignore
const duplicateCards = (cards) => {
  // @ts-ignore
  cards.cards.map((card) => ({
    ...card,
    id: nanoid(),
  }))
}

export default duplicateCards
