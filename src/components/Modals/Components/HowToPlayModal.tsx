import React, { useEffect, useState } from "react";

import { Card } from "@/components/composed/Game/Board/Card";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/store/hooks";
import { setModalConfig } from "@/store/slices/modals";

import { CLASSICDECKLITE } from "../../../assets/data/CLASSICDECKLITE";
import { BaseModal } from "./BaseModal";

export const HowToPlayModal = ({
  isOpen,
  handleClose,
  
    handleRevealCards,
 
}: {
  isOpen: boolean;
  handleClose: () => void;
  handleRevealCards: () =>() => void;
}) => {
  const cardIndexes = [ 0, 15, 6, 21]; // Specify the desired order of card indexes
  const [flippedCards, setFlippedCards] = useState([
    false,
    false,
    false,
    false,
  ]);

  const dispatch = useAppDispatch()

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


  const handleGoBack = () => {
    dispatch(setModalConfig({
      id: 'preGame', 
      isOpen: true,
    }))
  }

  const handleFlipCards = () => {
    handleClose()
    handleRevealCards()
  }

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
        <div className="w-full flex flex-col sm:flex-row sm:justify-between">
            <Button onClick={handleFlipCards}>Flip Cards</Button>
            <Button variant={'secondary'} onClick={handleGoBack} >Go back</Button>
        </div>
      </section>
    </BaseModal>
  );
};
