import React, { useState, useEffect } from 'react'
import { BaseModal } from './BaseModal'
import Card from '../../composed/Game/Board/Card/Card'
import { CLASSICDECKLITE } from '../../../assets/data/CLASSICDECKLITE'

export const InfoModal = ({ isOpen, handleClose, handleRevealCards }: { isOpen: any, handleClose: any, handleRevealCards: any }) => {
  const cardIndexes = [0, 6, 15, 21] // Specify the desired order of card indexes

  const [flippedCards, setFlippedCards] = useState([false, false, false, false])

  const handleShowCards = () => {
    handleRevealCards()
    handleClose()
  }

  useEffect(() => {
    if (isOpen) {
      const flipCardsWithDelay = () => {
        const delay = 500 // 1 second delay between each flip
        cardIndexes.forEach((index, i) => {
          setTimeout(() => {
            toggleFlipCard(index)
          }, i * delay)
        })
      }

      // Reset flipped cards to all false when the modal is opened
      setFlippedCards([false, false, false, false])

      flipCardsWithDelay()
    }
  }, [isOpen])

  const toggleFlipCard = (index) => {
    setFlippedCards((prevFlippedCards) => {
      const newFlippedCards = [...prevFlippedCards]
      newFlippedCards[cardIndexes.indexOf(index)] =
        !newFlippedCards[cardIndexes.indexOf(index)]
      return newFlippedCards
    })
  }

  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Match all of the pairs as fast as you can to win the game. Clubs match
        with Spades. Diamonds match with Hearts.
      </p>
      <div className="flex justify-evenly my-2.5">
        {cardIndexes.map((index, i) => (
          <Card
            key={i}
            isFlipped={flippedCards[i]}
            image={CLASSICDECKLITE.cards[index].src}
            difficulty={'medium'} cardId={undefined} handleClick={undefined} isDisabled={undefined}          />
        ))}
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        Complete the game in as short a time and in as few moves as possible.
        Flip the cards to begin.
      </p>

      <button
        onClick={handleShowCards}
        type="button"
        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
      >
        {'Flip cards'}
      </button>
    </BaseModal>
  )
}
