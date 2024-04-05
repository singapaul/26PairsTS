import React, { useEffect,useState } from "react";

import { Card } from "@/components/composed/Game/Board/Card";
import { Button } from "@/components/ui/button";

import { CLASSICDECKLITE } from "../../../assets/data/CLASSICDECKLITE";
import { BaseModal } from "./BaseModal";

export const InfoModal = ({
  isOpen,
  handleClose,
  handleRevealCards,
}: {
  isOpen: boolean;
  handleClose: () => void;
  handleRevealCards: () => void;
}) => {
  const cardIndexes = [0, 6, 15, 21]; // Specify the desired order of card indexes
  const [disabledFlip, setDisabledFlip] = useState<boolean>(true)
  const [flippedCards, setFlippedCards] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleShowCards = () => {
   if(!disabledFlip){ 
    handleRevealCards();
    handleClose();}
  };

  useEffect(() => {
    if (isOpen) {
      // Immediately disable the flip button when the modal is opened
      setDisabledFlip(true);
  
      // Reset flipped cards to all false when the modal is opened
      setFlippedCards([false, false, false, false]);
  
      const flipCardsWithDelay = () => {
        const delay = 500; // 500 ms delay between each flip
        cardIndexes.forEach((index, i) => {
          setTimeout(() => {
            toggleFlipCard(index);
          }, i * delay);
        });
      };
  
      flipCardsWithDelay();
      const delay = 500; // 500 ms delay between each flip
      // Calculate the total delay needed to flip all cards
      const totalDelay = cardIndexes.length * delay;
      // Enable the flip button after all cards have been flipped
      setTimeout(() => {
        setDisabledFlip(false);
      }, totalDelay - delay); // Adjusted to account for the timing of the first card flip
    }
  }, [isOpen]);
  

  const toggleFlipCard = (index: number) => {
    setFlippedCards((prevFlippedCards) => {
      const newFlippedCards = [...prevFlippedCards];
      newFlippedCards[cardIndexes.indexOf(index)] =
        !newFlippedCards[cardIndexes.indexOf(index)];
      return newFlippedCards;
    });
  };

  return (
    <BaseModal
      title="How to play"
      isOpen={isOpen}
      handleClose={() => {}}
      hideCloseButton={true}
    >
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
            difficulty={"medium"}
            cardId={'undefined'}
            handleClick={() => console.log('')}
            isDisabled={false}
          />
        ))}
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        Complete the game in as short a time and in as few moves as possible.
        Flip the cards to begin.
      </p>

      <Button
        onClick={handleShowCards}
        type="button"
        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
        disabled={disabledFlip}
      >
        {"Flip cards"}
      </Button>
    </BaseModal>
  );
};
