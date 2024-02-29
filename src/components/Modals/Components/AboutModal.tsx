import React, { useEffect,useState } from "react";

import { Card } from "@/components/composed/Game/Board/Card";

import { CLASSICDECKLITE } from "../../../assets/data/CLASSICDECKLITE";
import { BaseModal } from "./BaseModal";

export const AboutModal = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  const cardIndexes = [0, 6, 15, 21]; // Specify the desired order of card indexes
  // const cardIndexes = [0, 1, 2, 3] // Specify the desired order of card indexes
  const [flippedCards, setFlippedCards] = useState([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (isOpen) {
      const flipCardsWithDelay = () => {
        const delay = 1000; // 1 second delay between each flip
        cardIndexes.forEach((index, i) => {
          setTimeout(() => {
            toggleFlipCard(index);
          }, i * delay);
        });
      };

      // Reset flipped cards to all false when the modal is opened
      setFlippedCards([false, false, false, false]);

      flipCardsWithDelay();
    }
  }, [isOpen]);

  // @ts-ignore
  const toggleFlipCard = (index) => {
    setFlippedCards((prevFlippedCards) => {
      const newFlippedCards = [...prevFlippedCards];
      newFlippedCards[cardIndexes.indexOf(index)] =
        !newFlippedCards[cardIndexes.indexOf(index)];
      return newFlippedCards;
    });
  };

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
            cardId={'placeholder'}
            handleClick={() => console.log('placehlder')}
            difficulty={'tbc'}
            isDisabled={false}
          />
        ))}
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        Complete the game in as short a time and in as few moves as possible.
      </p>
    </BaseModal>
  );
};
