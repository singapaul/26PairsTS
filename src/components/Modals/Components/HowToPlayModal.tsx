import React, { useEffect, useState } from "react";

import { Card } from "@/components/composed/Game/Board/Card";
import { Button } from "@/components/ui/button";

import { CLASSICDECKLITE } from "../../../assets/data/CLASSICDECKLITE";
import { BaseModal } from "./BaseModal";

export const HowToPlayModal = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  const cardIndexes = [ 0, 15, 6, 21]; // Specify the desired order of card indexes
  const [flippedCards, setFlippedCards] = useState([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (isOpen) {
      const flipCardsWithDelay = () => {
        const delayBeforeStart = 2000; // 1 second delay before cards start flipping
        const delayBetweenFlips = 1000; // 1 second delay between each flip
        const flipOrder = [0, 2, 1, 3]; // Specify the desired order of flipping cards

        setTimeout(() => {
          flipOrder.forEach((flipIndex, i) => {
            setTimeout(() => {
              toggleFlipCard(cardIndexes[flipIndex]);
            }, i * delayBetweenFlips);
          });
        }, delayBeforeStart);
      };

      setFlippedCards([false, false, false, false]); // Reset flipped cards to all false when the modal is opened
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
    <BaseModal title="How to Play" isOpen={isOpen} handleClose={handleClose}>
      <section className="flex flex-col gap-2">
        <div className="flex flex-col gap-4">
          <p>A shuffled deck of cards is laid out in front of you</p>
          <p>
            You will have 4 seconds to memorise the positions of the cards,
            before the deck is flipped over.
          </p>
          <p>
            Flipping two cards at a time, match all the pairs to complete the
            game.
          </p>
        </div>

        <div className="flex justify-evenly my-2.5">
          {cardIndexes.map((index, i) => (
            <Card
              key={i}
              isFlipped={flippedCards[i]}
              image={CLASSICDECKLITE.cards[index].src}
              cardId={"placeholder"}
              handleClick={() => console.log("placehlder")}
              difficulty={"tbc"}
              isDisabled={false}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2">
        <p>
            <span className="font-bold">Clubs</span> match with
            <span className="  font-bold"> Spades</span>
          </p>
          <p>
            <span className="text-red-500 font-bold">Diamonds</span> match with
            <span className="text-red-500 font-bold"> Hearts</span>
          </p>
 
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
            {/* @todo make functional and sort colors */}
            <Button>Flip Cards</Button>
            <Button variant={'secondary'}>Go back</Button>
        </div>
      </section>
    </BaseModal>
  );
};
