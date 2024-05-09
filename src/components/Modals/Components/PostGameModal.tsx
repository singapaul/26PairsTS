import React, { useState } from "react";
import Countdown from "react-countdown";
import { FaLock } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { MdOutlineReplay } from "react-icons/md";
import { navigate } from "gatsby";

import { Button } from "@/components/ui/button";
import { CLASSIC_SHUFFLE, DAILY_SHUFFLE, LITE_SHUFFLE } from "@/settings";
import { useAppSelector } from "@/store/hooks";
import { selectHasPlayedToday } from "@/store/slices/playedToday";
import { useCopyToClipboard } from "@/utils";
import { timeUntilTomorrow } from "@/utils";

import { BaseModal } from "./BaseModal";
import ScoreContainer from "./ModalComponents/ScoreContainer";

export const PostGameModal = ({
  isOpen,
  handleClose,
  difficulty,
}: {
  isOpen: boolean;
  handleClose: () => void;
  difficulty:
    | typeof CLASSIC_SHUFFLE
    | typeof DAILY_SHUFFLE
    | typeof LITE_SHUFFLE;
}) => {
  const playedToday = useAppSelector(selectHasPlayedToday);
 

  
  // const { copySuccess, copyToClipboard } = useCopyToClipboard({
  //   time: parseInt(time),
  //   turns: turns,
  //   mode: "Daily",
  // });
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

  const gameTitle = getModalHeader(difficulty);

  const handleClickChallengeFriend = () => {};

  const handleClickReplayDeck = () => {};

  // @todo 2 make the buttons on this page work
  // @todo add scoreContaisner scores


  return (
    <BaseModal title="" isOpen={isOpen} handleClose={handleClose}>
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="w-full flex flex-col items-start gap-3">
          <h3 className="text-xs text-indigo-600 dark:text-white font-normal">
            {gameTitle}
          </h3>
          <h2 className="text-xl font-bold ">Game Complete! 🎉</h2>
          <ScoreContainer seconds={Number(54)} turns={Number(54)} />

          <div className="flex flex-col gap-3 w-full">
            <Button className="w-full" onClick={handleClickChallengeFriend}>
              Challenge a friend <FaRegShareSquare className="ml-3" />
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
  const handleClickLiteShuffle = () => {
     const currentPath = window.location.pathname; // Get the current path
    if (currentPath === '/LiteShuffle') {
      // If the current path is the same as the target path, refresh the page
      window.location.reload(); // Refresh the page
    } else {
      navigate("/LiteShuffle"); // Navigate to the new path
    }
  };

  const handleClickClassicShuffle = () => {
    const currentPath = window.location.pathname; // Get the current path
    if (currentPath === '/ClassicShuffle') {
      // If the current path is the same as the target path, refresh the page
      window.location.reload(); // Refresh the page
    } else {
      navigate("/ClassicShuffle"); // Navigate to the new path
  }};

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
 
  const handleClickLiteShuffle = () => {
    const currentPath = window.location.pathname; // Get the current path
   if (currentPath === '/LiteShuffle/') {
     // If the current path is the same as the target path, refresh the page
     window.location.reload(); // Refresh the page
   } else {
     navigate("/LiteShuffle/"); // Navigate to the new path
   }
 };

 const handleClickClassicShuffle = () => {
   const currentPath = window.location.pathname; // Get the current path
   console.log(currentPath)
   if (currentPath === '/ClassicShuffle/') {
     // If the current path is the same as the target path, refresh the page
     window.location.reload(); // Refresh the page
   } else {
     navigate("/ClassicShuffle/"); // Navigate to the new path
 }};



 const handleClickDailyShuffle = () => {

  navigate('/DailyShuffle/')
 }
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
