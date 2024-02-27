/* eslint-disable eqeqeq */
import React, { useState, useEffect, useRef } from "react";
import Card, { CardStyledLite } from "./Card/Card";
import { CARD_FLIP_TIME } from "@/settings";
import { Skeleton } from "@/components/ui/skeleton";
import { addToStats } from "@/store/slices/historicStats";
import { getNameById } from "@/utils";
import { increment, stop, start, reset } from "@/store/slices/timer";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  resetMoves,
  updateFinalTime,
  updateMoves,
  updateScore,
} from "@/store/slices/finishedGameStats";
import { Header } from "@/components/composed/Game/Header";

import { setModalConfig } from "@/store/slices/modals";
import { BoardStyled, BoardContainer } from "./styles";

import { saveGameStatsToLocalStorage } from "@/utils/saveGameStatsToLocalStorage";

import type { DifficultyKeys } from "@/store/slices/historicStats";
import { Button } from "@/components/ui/button";
import { ModalRegistry } from "@/components/Modals";
export type BoardProps = {
  duplicatedCards: any;
  gameDifficulty: DifficultyKeys;
};

export const Board = ({ duplicatedCards, gameDifficulty }: BoardProps) => {
  const [cardPair, setCardPair] = useState<string[]>([]);
  const [flippedCardList, setFlippedCardList] = useState<string[]>([]);
  const [disabledCardList, setDisabledCardList] = useState<string[]>([]);
  const [flipCard, setFlipCards] = useState<boolean>(true);
  const turnsCount = useAppSelector((state) => state.finishedGameStats.moves);
  const cardFlipTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isRunning = useAppSelector((state) => state.timer.isRunning);
  const time = useAppSelector((state) => state.timer.timeInSeconds);
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(true); // Add this line to introduce loading state

  // Modify your useEffect or data fetching logic as needed
  useEffect(() => {
    if (duplicatedCards && duplicatedCards.length > 0) {
      setIsLoading(false); // Set loading to false once data is ready
    }
  }, [duplicatedCards]);
  // const handleRevealCards = () => {
  //   const allCardIds = duplicatedCards.map((card: { id: string }) => card.id);
  //   setFlippedCardList(allCardIds);

  //   const delayTimeout = setTimeout(() => {
  //     setFlippedCardList([]);
  //   }, CARD_FLIP_TIME);
  //   return () => clearTimeout(delayTimeout);
  // };

  const handleRevealCards = () => {
    const allCardIds = duplicatedCards.map((card: { id: string }) => card.id);
    setFlippedCardList(allCardIds);
  };

  useEffect(() => {
    // Only proceed if all cards are currently revealed
    if (flippedCardList.length === duplicatedCards.length && duplicatedCards.length > 0) {
      const delayTimeout = setTimeout(() => {
        setFlippedCardList([]); // Hide all cards after the delay
      }, CARD_FLIP_TIME);
  
      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(delayTimeout);
    }
  }, [flippedCardList, duplicatedCards]);
  const calculateScore = () => {
    const maxScore = 10000;
    const uniqueCardCount = duplicatedCards.length / 2;
    const finalScore = Math.floor(maxScore * (uniqueCardCount / turnsCount));
    dispatch(updateScore(finalScore));
  };

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    if (isRunning) {
      intervalId = setInterval(() => {
        dispatch(increment());
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const resetCardPair = () => setCardPair([]);

  const handleCardClick = (id: string) => {
    if (turnsCount == 0) {
      dispatch(start());
    }

    if (cardFlipTimerRef.current) clearTimeout(cardFlipTimerRef.current);
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

        dispatch(stop());
        dispatch(updateFinalTime(time));

        saveGameStatsToLocalStorage({
          gameMode: "26-pairs-game-stats-daily",
          score: finalScore,
          time: time,
          turns: turnsCount,
        });
        dispatch(addToStats({ gameDifficulty }));
        setTimeout(
          () =>
            dispatch(
              setModalConfig({
                id: "score",
                isOpen: true,
                props: {
                  gameDifficulty,
                },
              })
            ),
          1000
        );
      }
    } else {
      cardFlipTimerRef.current = setTimeout(resetCardPair, 1000);
    }
  };

  const resetGame = () => {
    setCardPair([]);
    setFlippedCardList([]);
    dispatch(resetMoves());
    dispatch(updateScore(0));
    dispatch(reset());

    dispatch(stop());
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

  useEffect(() => {
    if (flipCard) {
      dispatch(
        setModalConfig({
          id: "info",
          isOpen: true,
          props: {
            handleRevealCards,
          },
        })
      );
      setFlipCards(false); // Ensure this runs only once
    }
  }, [flipCard, dispatch]); // Dependencies array ensures effect only reruns if these values change
  

  // Make sure to clear the timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (cardFlipTimerRef.current) clearTimeout(cardFlipTimerRef.current);
    };
  }, []);

  return (
    <BoardContainer>
      <Header resetGame={resetGame} gameDifficulty={gameDifficulty} />
{isLoading ? 
        <BoardStyled>
          {Array.from({ length: 26 }).map((_, index) => (
            <Skeleton
              key={index}
              className="w-[60px] h-[80px] rounded-[5px] m-0.5"
            />
          ))}
        </BoardStyled>
       : 
        <>
          <BoardStyled>
            {duplicatedCards.map((card: { id: string; src: any }) => {
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
            })}
          </BoardStyled>
          <Button
            onClick={() =>
              dispatch(
                setModalConfig({
                  id: "info",
                  isOpen: true,
                  props: {
                    handleRevealCards,
                  },
                })
              )
            }
          >
            MODAL?
          </Button>
        </>
  }
      <ModalRegistry />
    </BoardContainer>
  );
};
