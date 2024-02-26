/* eslint-disable eqeqeq */
import React, { useState, useEffect, useRef} from "react";
import Card from "./Card/Card";
import { CARD_FLIP_TIME } from "@/settings";
import { addToStats } from "@/store/slices/historicStats";
import { getNameById } from "@/utils";
import { increment, stop, reset } from "@/store/slices/timer";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  resetMoves,
  updateFinalTime,
  updateMoves,
  updateScore,
} from "@/store/slices/finishedGameStats";
import type { DifficultyKeys } from "@/store/slices/historicStats";
import { Header } from "@/components/composed/Game/Header";
import { ModalRegistry } from "@/components/Modals/Register/ModalRegistry";
import { setModalConfig } from "@/store/slices/modals";
import { BoardStyled } from "./styles";
import { Button } from "@/components/ui/button";
import { saveGameStatsToLocalStorage } from "@/utils/saveGameStatsToLocalStorage";
 
export type BoardProps = { duplicatedCards: any; gameDifficulty: DifficultyKeys };

export const Board = ({ duplicatedCards, gameDifficulty }: BoardProps) => {
  const [cardPair, setCardPair] = useState<string[]>([]);
  const [flippedCardList, setFlippedCardList] = useState<string[]>([]);
  const [disabledCardList, setDisabledCardList] = useState<string[]>([]);
  const turnsCount = useAppSelector((state) => state.finishedGameStats.moves);
  // const turnsCount = 20
  const dispatch = useAppDispatch();
  const cardFlipTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const time = useAppSelector((state) => state.timer.timeInSeconds);
  const handleRevealCards = () => {
    const allCardIds = duplicatedCards.map((card: { id: string }) => card.id);
    setFlippedCardList(allCardIds);

    const delayTimeout = setTimeout(() => {
      setFlippedCardList([]);
    }, CARD_FLIP_TIME);
    return () => clearTimeout(delayTimeout);
  };

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
        setIsRunning(false);
        dispatch(updateFinalTime(time));
      
 
        saveGameStatsToLocalStorage({
          gameMode: "26-pairs-game-stats-daily",
          score: finalScore,
          time: time,
          turns: turnsCount + 1,
        });
        dispatch(addToStats({gameDifficulty}))
        setTimeout(
          () =>
            dispatch(
              setModalConfig({
                id: "score",
                isOpen: true,
                props: {
                  gameDifficulty
                }
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

  // Make sure to clear the timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (cardFlipTimerRef.current) clearTimeout(cardFlipTimerRef.current);
    };
  }, []);

  return (
    <>
      <div>
        <Header resetGame={resetGame} gameDifficulty={gameDifficulty} />
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
        <ModalRegistry />
      </div>
    </>
  );
};
