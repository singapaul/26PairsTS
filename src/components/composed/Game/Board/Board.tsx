/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import { getNameById } from "@/utils";
import { increment, stop, reset } from "@/store/slices/timer";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  resetMoves,
  updateFinalTime,
  updateMoves,
  updateScore,
} from "@/store/slices/finishedGameStats";
import { Header } from "@/components/composed/Game/Header";
import { ModalRegistry } from "@/components/Modals/Register/ModalRegistry";
import { setModalConfig } from "@/store/slices/modals";
import { BoardStyled } from "./styles";
import { Button } from "@/components/ui/button";

export type BoardProps = { duplicatedCards: any; gameDifficulty: any };

export const Board = ({ duplicatedCards, gameDifficulty }: BoardProps) => {
  const [cardPair, setCardPair] = useState<any>([]);
  const [flippedCardList, setFlippedCardList] = useState<string[]>([]);
  const [disabledCardList, setDisabledCardList] = useState<string[]>([]);
  const turnsCount = useAppSelector((state) => state.finishedGameStats.moves);
  const dispatch = useAppDispatch();

  const [isRunning, setIsRunning] = useState(false);
  const time = useAppSelector((state) => state.timer.timeInSeconds);
  const handleRevealCards = () => {
    const allCardIds = duplicatedCards.map((card: { id: any }) => card.id);
    setFlippedCardList(allCardIds);
    // Add a 1-second delay and then set flippedCardList to an empty array
    const delay = 4000; // 1 second in milliseconds
    const delayTimeout = setTimeout(() => {
      setFlippedCardList([]);
    }, delay);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(delayTimeout);
  };

  const calculateScore = () => {
    const maxScore = 10000;
    const uniqueCardCount = duplicatedCards.length / 2;
    const finalScore = Math.floor(maxScore * (uniqueCardCount / turnsCount));
    dispatch(updateScore(finalScore));
  };

  // @here instead we are going to be dispatching a new time to the redux store instead!!
  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    if (isRunning) {
      intervalId = setInterval(() => {
        dispatch(increment()); // Dispatch the increment action every second
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const resetCardPair = () => setCardPair([]);

  const handleCardClick = (id: string) => {
    if (turnsCount == 0) {
      // start the timer
      setIsRunning(true);
    }
    clearTimeout(window.cardFlipTimer);
    if (cardPair.includes(id)) return;
    const currentCardPair = [...cardPair, id];
    if (currentCardPair.length === 3) {
      setCardPair([id]);
    } else {
      setCardPair(currentCardPair);
    }
    if (currentCardPair.length !== 2) return;
    dispatch(updateMoves());
    const [firstCardName, secondCardName] = currentCardPair.map((cardId) =>
      getNameById(duplicatedCards, cardId)
    );
    if (firstCardName === secondCardName) {
      const currentFlippedCards = [...flippedCardList, ...currentCardPair];
      setFlippedCardList(currentFlippedCards);
      resetCardPair();
      if (duplicatedCards.length === currentFlippedCards.length) {
        calculateScore();
        const maxScore = 10000;
        const uniqueCardCount = duplicatedCards.length / 2;
        const finalScore = Math.floor(
          maxScore * (uniqueCardCount / turnsCount)
        );
        // Stop the timer
        setIsRunning(false);
        dispatch(updateFinalTime(time));
        // logLatestStats(finalScore, time, turnsCount, gameDifficulty);
        setTimeout(
          () =>
            dispatch(
              setModalConfig({
                id: "score",
                isOpen: true,
              })
            ),
          1000
        );
      }
    } else {
      window.cardFlipTimer = setTimeout(resetCardPair, 1000);
    }
  };

  const resetGame = () => {
    setCardPair([]);
    setFlippedCardList([]);
    dispatch(resetMoves());
    dispatch(updateScore(0));
    dispatch(reset());
    setIsRunning(false);
    dispatch(
      setModalConfig({
        id: "info",
        isOpen: true,
        props: {
          handleRevealCards,
        },
      })
    );
  };

  // @can I just default this true in redux instead??
  // useEffect(() => {
  //   dispatch(
  //     setModalConfig({
  //       id: "info",
  //       isOpen: true,
  //       props: {
  //         handleRevealCards,
  //       },
  //     })
  //   );
  // }, []);

  return (
    <>
      <div>
        <Header resetGame={resetGame} />
        <BoardStyled>
          {duplicatedCards.map(
            (card: {
              id: React.Key | null | undefined | never | any;
              src: any;
            }) => {
              return (
                <Card
                  difficulty={gameDifficulty}
                  key={card.id}
                  image={card.src}
                  cardId={card.id}
                  handleClick={() => handleCardClick(card.id)}
                  isFlipped={[...flippedCardList, ...cardPair].includes(
                    card.id
                  )}
                  isDisabled={disabledCardList.includes(card.id)}
                />
              );
            }
          )}
        </BoardStyled>
        <Button
          onClick={() =>
            dispatch(
              setModalConfig({
                id: "score",
                isOpen: true,
              })
            )
          }
        >
          Trigger a modal!
        </Button>
        <ModalRegistry />
      </div>
    </>
  );
};
