import React from "react";
import Countdown from "react-countdown";
import { FaLock } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { MdOutlineReplay } from "react-icons/md";
import { navigate } from "gatsby";

import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { currentDifficulty  } from "@/store/slices/difficulty";
import { setDifficulty } from "@/store/slices/difficulty";
import { selectHasPlayedToday } from "@/store/slices/playedToday";
import { useCopyToClipboard } from "@/utils";
import { timeUntilTomorrow } from "@/utils";

import { BaseModal } from "./BaseModal";
import ScoreContainer from "./ModalComponents/ScoreContainer";
import { getModalHeader, getTodaysGame } from "./prePostGameUtils";

export const PostGameModal = ({
  isOpen,
  handleClose,
  handlePlayAgain,
}: {
  isOpen: boolean;
  handleClose: () => void;
  handlePlayAgain: () => void;
}) => {
  const difficulty = useAppSelector(currentDifficulty)
  const playedToday = useAppSelector(selectHasPlayedToday);
  const todayGame = getTodaysGame(difficulty);

  const { copySuccess, copyToClipboard } = useCopyToClipboard({
    time: todayGame?.timeToday,
    turns: todayGame?.turnsToday,
    mode: difficulty,
  });

  const gameTitle = getModalHeader(difficulty);

  const handleClickChallengeFriend = () => {
    copyToClipboard();
  };

  const handleClickReplayDeck = () => {
    handleClose();
    handlePlayAgain();
  };

  return (
    <BaseModal
      title=""
      isOpen={isOpen}
      handleClose={handleClose}
      homeButton={true}
    >
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="w-full flex flex-col items-start gap-3">
          <h3 className="text-xs text-indigo-600 dark:text-white font-normal">
            {gameTitle}
          </h3>
          <h2 className="text-xl font-bold ">Game Complete! 🎉</h2>
          <ScoreContainer
            seconds={Number(todayGame?.timeToday)}
            turns={Number(todayGame?.turnsToday)}
          />
          <div className="flex flex-col gap-3 w-full">
            <Button className="w-full" onClick={handleClickChallengeFriend}>
              {copySuccess} <FaRegShareSquare className="ml-3" />
            </Button>
            {difficulty !== "DAILY_SHUFFLE" && (
              <Button
                className="w-full"
                onClick={handleClickReplayDeck}
                variant={"secondary"}
              >
                Replay this shuffle <MdOutlineReplay className="ml-3" />
              </Button>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col items-center sm:items-start gap-3">
          <h2 className="text-base font-bold ">Fancy another game?</h2>
          {difficulty === "DAILY_SHUFFLE" &&
            DailyShuffleButtonArray({ playedToday })}
          {difficulty === "LITE_SHUFFLE" &&
            LiteClassicShuffleButtonArray({ playedToday })}
          {difficulty === "CLASSIC_SHUFFLE" &&
            LiteClassicShuffleButtonArray({ playedToday })}
        </div>
      </div>
    </BaseModal>
  );
};

const DailyShuffleButtonArray = ({ playedToday }: { playedToday: boolean }) => {
  const dispatch = useAppDispatch()
  const handleClickLiteShuffle = () => {
    const currentPath = window.location.pathname; // Get the current path
    if (currentPath === "/LiteShuffle") {
      // If the current path is the same as the target path, refresh the page
      window.location.reload(); // Refresh the page
      dispatch(setDifficulty('LITE_SHUFFLE'))
    } else {
      navigate("/LiteShuffle"); // Navigate to the new path
      dispatch(setDifficulty('LITE_SHUFFLE'))
    }
  };

  const handleClickClassicShuffle = () => {
    const currentPath = window.location.pathname; // Get the current path
    if (currentPath === "/ClassicShuffle") {
      // If the current path is the same as the target path, refresh the page
      window.location.reload(); // Refresh the page
      dispatch(setDifficulty('CLASSIC_SHUFFLE'))
    } else {
      navigate("/ClassicShuffle"); // Navigate to the new path
      dispatch(setDifficulty('CLASSIC_SHUFFLE'))
    }
  };

  return (
    <>
      {playedToday && (
        <span className="text-nowrap text-sm text-gray-900 dark:text-gray-100">
          {"Next daily shuffle in "}
          <Countdown
            date={Date.now() + timeUntilTomorrow()}
            daysInHours={true}
            className="font-medium"
          />
        </span>
      )}
      <Button
        className="w-full"
        variant={"secondary"}
        onClick={handleClickLiteShuffle}
      >
        Play Lite Shuffle
      </Button>
      <Button
        className="w-full"
        variant={"secondary"}
        onClick={handleClickClassicShuffle}
      >
        Play Classic Shuffle
      </Button>
    </>
  );
};

const LiteClassicShuffleButtonArray = ({
  playedToday,
}: {
  playedToday: boolean;
}) => {

  const dispatch = useAppDispatch()
  const handleClickLiteShuffle = () => {
    const currentPath = window.location.pathname; // Get the current path
    if (currentPath === "/LiteShuffle/") {
      // If the current path is the same as the target path, refresh the page
      window.location.reload(); // Refresh the page
      dispatch(setDifficulty('LITE_SHUFFLE'))
    } else {
      navigate("/LiteShuffle/"); // Navigate to the new path
      dispatch(setDifficulty('LITE_SHUFFLE'))
    }
  };

  const handleClickClassicShuffle = () => {
    const currentPath = window.location.pathname; // Get the current path
    if (currentPath === "/ClassicShuffle/") {
      // If the current path is the same as the target path, refresh the page
      window.location.reload(); // Refresh the page
      dispatch(setDifficulty('CLASSIC_SHUFFLE'))
    } else {
      navigate("/ClassicShuffle/"); // Navigate to the new path
      dispatch(setDifficulty('CLASSIC_SHUFFLE'))
    }
  };

  const handleClickDailyShuffle = () => {
    navigate("/DailyShuffle/");
    dispatch(setDifficulty('DAILY_SHUFFLE'))
  };
  return (
    <>
      <Button
        className="w-full"
        variant={"secondary"}
        onClick={handleClickLiteShuffle}
      >
        Play Lite Shuffle
      </Button>
      <Button
        className="w-full"
        variant={"secondary"}
        onClick={handleClickClassicShuffle}
      >
        Play Classic Shuffle
      </Button>
      <div className="flex flex-col items-start w-full gap-1">
        <Button
          className="w-full"
          disabled={playedToday}
          variant={"secondary"}
          onClick={handleClickDailyShuffle}
        >
          Play Daily Shuffle {playedToday && <FaLock className="ml-3" />}
        </Button>
        {playedToday && (
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
    </>
  );
};
