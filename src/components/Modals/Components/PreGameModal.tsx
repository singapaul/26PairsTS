import React from "react";
import { useState } from "react";
import Countdown from "react-countdown";
import { FaArrowRight } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { CLASSIC_SHUFFLE, DAILY_SHUFFLE, LITE_SHUFFLE } from "@/settings";
import { useAppDispatch } from "@/store/hooks";
import { useAppSelector } from "@/store/hooks";
import { selectLoadingState } from "@/store/slices/loading";
import { setModalConfig } from "@/store/slices/modals";
import { selectHasPlayedToday } from "@/store/slices/playedToday";
import { calculateCurrentStreak, timeUntilTomorrow } from "@/utils";
import { getLocalStorageKeyFromGameMode } from "@/utils";

import { BaseModal } from "./BaseModal";
import ScoreContainer from "./ModalComponents/ScoreContainer";
import { StreakContainer } from "./ModalComponents/StreakContainer";

// let's get from local
const getGameStats = (difficulty: string): GameRecord => {
  if (typeof window !== "undefined") {
    const key = getLocalStorageKeyFromGameMode(difficulty);
    const storedValue = window.localStorage.getItem(key);
    if (storedValue !== null) {
      // storedValue will be an array of scores or null
      const gameDataArray = JSON.parse(storedValue);
      return getLowestScore(gameDataArray);
    }
    return {
      time: "-",
      turns: "-",
      score: "-",
      date: "-",
    };
  }
  return {
    time: "-",
    turns: "-",
    score: "-",
    date: "-",
  };
};

const getStreak = (difficulty: any): number => {
  if (typeof window !== "undefined") {
    const key = getLocalStorageKeyFromGameMode(difficulty);
    const storedValue = window.localStorage.getItem(key);

    if (storedValue !== null) {
      // storedValue will be an array of scores or null
      const gameDataArray = JSON.parse(storedValue);
      return calculateCurrentStreak(gameDataArray);
    }
    return 0;
  }
  return 0;
};

const getModalHeader = (gameMode: string): string => {
  // Match the gameMode with its corresponding local storage key
  switch (gameMode) {
    case CLASSIC_SHUFFLE:
      return "Classic Shuffle";
    case DAILY_SHUFFLE:
      return "Daily Shuffle";
    case LITE_SHUFFLE:
      return "Lite Shuffle";
    default:
      // Handle case where the gameMode does not match any known type
      return "Lite Shuffle";
  }
};

type GameRecord = {
  time: string;
  turns: string;
  score: string;
  date: string;
};

const getLowestScore = (records: GameRecord[]): GameRecord => {
  if (records.length === 0) {
    return {
      time: "-",
      turns: "-",
      score: "-",
      date: "-",
    };
  }

  return records.reduce((lowest, current) => {
    // Convert the score to a number for comparison
    const currentScore = parseInt(current.score, 10);
    const lowestScore = parseInt(lowest.score, 10);

    // Return the object with the lower score
    return currentScore < lowestScore ? current : lowest;
  });
};

const getModalCopy = (gameMode: string): string => {
  // Match the gameMode with its corresponding local storage key
  switch (gameMode) {
    case CLASSIC_SHUFFLE:
      return "If you are new or need a reminder on how to play, please read below:";
    case DAILY_SHUFFLE:
      return "Ready to beat the daily shuffle? If you need a reminder on how to play, please read below:";
    case LITE_SHUFFLE:
      return "If you are new or need a reminder on how to play, please read below:";
    default:
      // Handle case where the gameMode does not match any known type
      return "If you are new or need a reminder on how to play, please read below:";
  }
};

export const PreGameModal = ({
  isOpen,
  handleClose,
  difficulty,
  handleRevealCards,
}: {
  isOpen: boolean;
  handleClose: () => void;
  handleRevealCards: () => () => void;
  difficulty:
    | typeof CLASSIC_SHUFFLE
    | typeof DAILY_SHUFFLE
    | typeof LITE_SHUFFLE;
}) => {
  const dispatch = useAppDispatch();
  const gameTitle = getModalHeader(difficulty);
  const modalCopy = getModalCopy(difficulty);
  const isCardsLoading = useAppSelector(selectLoadingState);
  const currentStreak: number = getStreak(difficulty);
  const playedToday = useAppSelector(selectHasPlayedToday);
  const [bestGame, setBestGame] = useState<GameRecord>(
    getGameStats(difficulty)
  );

  const handleHowToPlay = (): void => {
    dispatch(
      setModalConfig({
        id: "howToPlay",
        isOpen: true,
        props: {
          handleRevealCards,
        },
      })
    );
  };

  const handleHowScoringWorks = (): void => {
    dispatch(
      setModalConfig({
        id: "howScoringWorks",
        isOpen: true,
        props: {
          handleRevealCards,
        },
      })
    );
  };

  const handleFlipCards = () => {
    handleClose();
    handleRevealCards();
  };

  // getGameStats(difficulty);

  return (
    <BaseModal
      title=""
      isOpen={isOpen}
      handleClose={handleClose}
      homeButton={true}
    >
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="w-full flex flex-col items-start">
          <h3 className="text-xs text-indigo-600 dark:text-white font-normal">
            {"WELCOME!"}
          </h3>
          <h2 className="text-xl font-bold ">{gameTitle}</h2>
          <p className="text-sm text-left my-3">{modalCopy}</p>

          <div className="flex flex-col gap-3 w-full">
            <Button
              className="w-full"
              onClick={handleHowToPlay}
              variant={"secondary"}
            >
              How to play <FaArrowRight className="ml-3" />
            </Button>
            <Button
              className="w-full"
              onClick={handleHowScoringWorks}
              variant={"secondary"}
            >
              How Scoring works <FaArrowRight className="ml-3" />
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center sm:items-start gap-3">
          <h2 className="text-xl font-bold ">{"Your High Score:"}</h2>
          <ScoreContainer
            seconds={Number(bestGame.time)}
            turns={Number(bestGame.turns)}
          />
          {difficulty === "DAILY_SHUFFLE" && (
            <StreakContainer streak={currentStreak} />
          )}
          <Button
            disabled={
              (playedToday && difficulty === DAILY_SHUFFLE) || isCardsLoading
            }
            className="w-full"
            onClick={handleFlipCards}
          >
            Flip Cards
          </Button>
          {playedToday && difficulty === "DAILY_SHUFFLE" && (
            <span className="text-nowrap text-sm text-gray-900 dark:text-gray-100">
              {"Next daily shuffle in "}
              <Countdown
                date={Date.now() + timeUntilTomorrow()}
                daysInHours={true}
                className="font-medium"
              />
            </span>
          )}
        </div>
      </div>
    </BaseModal>
  );
};
