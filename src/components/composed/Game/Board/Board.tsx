/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import { getNameById } from "@/utils";
import styled from "styled-components";
import { showAbout } from "@/store/slices/modals";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  resetMoves,
  updateFinalTime,
  updateMoves,
  updateScore,
} from "@/store/slices/finishedGameStats";
import { Header } from "@/components/composed/Game/Header";
import {
  AboutModal,
  InfoModal,
  PlayedModal,
  SettingsModal,
  StatsModal,
  TACModal,
} from "@/components/Modals";
import { ModalRegistry } from "@/components/Modals/Register/ModalRegistry";

const BoardStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  align-items: center;
  gap: 0.3rem;
  margin: auto 0;
  padding: 0.25rem 0;
  max-width: 1100px;
  max-height: 600px;
`;

type BoardProps = { duplicatedCards: any; gameDifficulty: any };

export const Board = ({ duplicatedCards, gameDifficulty }: BoardProps) => {
  const [cardPair, setCardPair] = useState([]);
  const [flippedCardList, setFlippedCardList] = useState([]);
  const [disabledCardList, setDisabledCardList] = useState([]);
  // redux stats
  // @ts-ignore
  const turnsCount = useAppSelector((state) => state.finishedGameStats.moves)

  const dispatch = useAppDispatch()

  // modal states
  const [infoOpen, setInfoOpen] = useState(true);
  // @todo hide on completion
  const [isOpenScoreBoard, setIsOpenScoreBoard] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenStats, setIsOpenStats] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isOpenTAC, setISOpenTAC] = useState(false);
  const [playedTodayModal, setPlayedTodayModal] = useState(true);

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
    dispatch(updateScore(finalScore))
 
  };

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      //   @ts-ignore
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const resetCardPair = () => setCardPair([]);

  const handleCardClick = (id: any) => {
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
        setTimeout(() => setIsOpenScoreBoard(true), 1000);
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
    setTime(0);
    setIsRunning(false);
    setIsOpenScoreBoard(false);
  };

  return (
    <>
      <div>
        <Header
          turnsCount={turnsCount}
          resetGame={resetGame}
          AboutModalOpen={setIsOpenAbout}
          StatsModalOpen={setIsOpenStats}
          SettingModalOpen={setIsOpenSettings}
          MenuModalOpen={setIsOpenMenu}
          time={time}
        />
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
        <button onClick={() => dispatch(showAbout())}>sexy button</button>
        <AboutModal
          isOpen={isOpenAbout}
          handleClose={() => setIsOpenAbout(false)}
        />
        <ModalRegistry />
        <StatsModal
          isOpen={isOpenStats}
          handleClose={() => setIsOpenStats(false)}
          gameDifficulty={gameDifficulty}
        />
        <TACModal isOpen={isOpenTAC} handleClose={() => setISOpenTAC(false)} />

        <InfoModal
          isOpen={infoOpen}
          handleClose={() => {
            setInfoOpen(false);
          }}
          handleRevealCards={handleRevealCards}
        />
        <PlayedModal
          isOpen={isOpenScoreBoard}
          handleClose={() => setIsOpenScoreBoard(false)}
          gameDifficulty={gameDifficulty}
        />
        <SettingsModal
          isOpen={isOpenSettings}
          handleClose={() => setIsOpenSettings(false)}
          handleTACModal={() => {
            setIsOpenSettings(false);
            setISOpenTAC(true);
          }}
        />
      </div>
    </>
  );
};
