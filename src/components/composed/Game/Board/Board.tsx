/* eslint-disablec  */
import React, { useEffect, useRef, useState } from "react";

import { Header } from "@/components/composed/Game/Header";
import { PostGameModal, PreGameModal } from "@/components/Modals";
import { Skeleton } from "@/components/ui/skeleton";
import { CARD_FLIP_TIME } from "@/settings";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  resetMoves,
  updateFinalTime,
  updateMoves,
  updateScore,
} from "@/store/slices/finishedGameStats";
import { addToStats } from "@/store/slices/historicStats";
import { selectLoadingState } from "@/store/slices/loading";
import { setIsNotLoading } from "@/store/slices/loading";
import { setHasPlayedToday } from "@/store/slices/playedToday";
import { selectHasPlayedToday } from "@/store/slices/playedToday";
import { increment, reset, start, stop } from "@/store/slices/timer";
import {
  calculateGameScore,
  getLocalStorageKeyFromGameMode,
  getNameById,
} from "@/utils";
import { saveGameStatsToLocalStorage } from "@/utils/saveGameStatsToLocalStorage";

import { Card } from "./Card";

import { BoardContainer, BoardStyled } from "./styles";

import type { DifficultyKeys } from "@/store/slices/historicStats";

type CardType = {
  name: string;
  src: string;
  matchID: string;
  id: string;
};

export type BoardProps = {
  duplicatedCards: CardType[];
  gameDifficulty: DifficultyKeys;
};

export const Board = ({ duplicatedCards, gameDifficulty }: BoardProps) => {
  const dispatch = useAppDispatch();
  const [cardPair, setCardPair] = useState<string[]>([]);
  const [flippedCardList, setFlippedCardList] = useState<string[]>([]);
  const isLoading = useAppSelector(selectLoadingState);
  const [disabledCardList, setDisabledCardList] = useState<string[]>([]);
  const turnsCount = useAppSelector((state) => state.finishedGameStats.moves);
  const cardFlipTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isRunning = useAppSelector((state) => state.timer.isRunning);
  const time = useAppSelector((state) => state.timer.timeInSeconds);
  const hasPlayedToday: boolean = useAppSelector(selectHasPlayedToday);
  const [isOpenPreGameModal, setIsOpenPreGameModal] = useState<boolean>(true);
  const [isOpenPostGameModal, setIsOpenPostGameModal] =
    useState<boolean>(false);

  // @todo refactor this case
  const handleRevealCards = () => {
    const allCardIds = duplicatedCards.map((card: { id: string }) => card.id);
    setFlippedCardList(allCardIds);

    const delayTimeout = setTimeout(() => {
      setFlippedCardList([]);
    }, CARD_FLIP_TIME);
    return () => clearTimeout(delayTimeout);
  };

  // @todo refactor this case
  const handleShowCardsPerm = (): void => {
    const allCardIds = duplicatedCards.map((card: { id: string }) => card.id);
    setFlippedCardList(allCardIds);
  };
  // Modify your useEffect or data fetching logic as needed
  useEffect(() => {
    if (duplicatedCards && duplicatedCards.length > 0) {
      dispatch(setIsNotLoading());
    }

    // depending if we have played today or not we open a different modal
    if (hasPlayedToday && gameDifficulty === "DAILY_SHUFFLE") {
      setIsOpenPreGameModal(false);
      setIsOpenPostGameModal(true);
      handleShowCardsPerm();
    }
  }, [dispatch, duplicatedCards]);

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

  const handleCardClick = (id: string): void => {
    if (turnsCount === 0) {
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
      setDisabledCardList(currentFlippedCards);
      setFlippedCardList(currentFlippedCards);
      resetCardPair();
      if (duplicatedCards.length === currentFlippedCards.length) {
        // State where the game is finished
        const finalScore = calculateGameScore(time, turnsCount + 1);

        dispatch(updateScore(finalScore));
        dispatch(stop());
        dispatch(updateFinalTime(time));
        dispatch(setHasPlayedToday());

        const gameModeString = getLocalStorageKeyFromGameMode(gameDifficulty);
        saveGameStatsToLocalStorage({
          gameMode: gameModeString,
          score: finalScore,
          time: time,
          turns: turnsCount + 1,
        });
        dispatch(addToStats({ gameDifficulty }));

        setTimeout(() => setIsOpenPostGameModal(true), 1000);
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
    dispatch(stop());
    dispatch(reset());
    setIsOpenPreGameModal(true);
  };

  // Make sure to clear the timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (cardFlipTimerRef.current) clearTimeout(cardFlipTimerRef.current);
    };
  }, []);

  return (
    <BoardContainer>
      <Header resetGame={resetGame} gameDifficulty={gameDifficulty} />
      {isLoading ? (
        <BoardStyled>
          {Array.from({ length: 24 }).map((_, index) => (
            <Skeleton
              key={index}
              className="w-[60px] h-[84px] rounded-[2px] m-1"
            />
          ))}
        </BoardStyled>
      ) : (
        <>
          <BoardStyled>
            {duplicatedCards.map((card: { id: string; src: string }) => {
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
        </>
      )}
      <PreGameModal
        handleRevealCards={handleRevealCards}
        isOpen={isOpenPreGameModal}
        handleClose={() => setIsOpenPreGameModal(false)}
      />
      <PostGameModal
        isOpen={isOpenPostGameModal}
        handleClose={() => setIsOpenPostGameModal(false)}
        handlePlayAgain={resetGame}
      />
    </BoardContainer>
  );
};
