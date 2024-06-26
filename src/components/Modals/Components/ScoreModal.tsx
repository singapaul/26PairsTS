import React from "react";

import { CLASSIC_SHUFFLE, DAILY_SHUFFLE, LITE_SHUFFLE } from "@/settings";
import { useAppSelector } from "@/store/hooks";
import { useCopyToClipboard } from "@/utils";

import { BaseModal } from "./BaseModal";

import type { DifficultyKeys } from "@/store/slices/historicStats";


  const getGameMode = (gameMode: string)  => {
  // Match the gameMode with its corresponding local storage key
  switch (gameMode) {
    case CLASSIC_SHUFFLE:
      return 'Classic';
    case DAILY_SHUFFLE:
      return 'Daily';
    case LITE_SHUFFLE:
      return 'Lite';
    default:
      return 'Lite';
  }
};

export const ScoreModal = ({
  isOpen,
  handleClose,
  gameDifficulty,
  handlePlayAgain,
}: {
  isOpen: boolean;
  handleClose: () => void;
  gameDifficulty: DifficultyKeys;
  handlePlayAgain: () => void;
}) => {

  const bestStats = useAppSelector((state) => state.stats[gameDifficulty]);
  const turnsCount = useAppSelector((state) => state.finishedGameStats.moves);
  const timeCount = useAppSelector(
    (state) => state.finishedGameStats.finalTime
  );


 const gameMode = getGameMode(gameDifficulty)
  
 
  const { copySuccess, copyToClipboard } = useCopyToClipboard({
    time: timeCount,
    turns: JSON.stringify(turnsCount),
    mode: gameMode,
  });

  return (
    <BaseModal title="Score" isOpen={isOpen} handleClose={handleClose}>
      <div className="my-2 flex justify-center">
        <div className="m-1 w-1/4 items-center justify-center dark:text-white">
          <div className="text-3xl font-bold">{turnsCount}</div>
          <div className="text-xs">{"Turns"}</div>
        </div>
        <div className="m-1 w-1/4 items-center justify-center dark:text-white">
          <div className="text-3xl font-bold">{timeCount}</div>
          <div className="text-xs">{"Time (s)"}</div>
        </div>
        <div className="m-1 w-1/4 items-center justify-center dark:text-white">
          <div className="text-3xl font-bold">{bestStats.bestTurns}</div>
          <div className="text-xs">{"Best Turns"}</div>
        </div>
        <div className="m-1 w-1/4 items-center justify-center dark:text-white">
          <div className="text-3xl font-bold">
            {(Number(bestStats.bestTime))}
          </div>
          <div className="text-xs">{"Best Time (s)"}</div>
        </div>
      </div>
      {/* need to pass in a prop to say if the game is over or not */}
      {(true || true) && (
        <div className="mt-5 columns-2 items-center  justify-center text-center dark:text-white sm:mt-6">
          <button
            type="button"
            onClick={handlePlayAgain}
            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
          >
            {/* <ShareIcon className="mr-2 h-6 w-6 cursor-pointer dark:stroke-white" /> */}
            Play again
          </button>
          <div>
            <button
              type="button"
              onClick={copyToClipboard}
              className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
            >
              {/* <ShareIcon className="mr-2 h-6 w-6 cursor-pointer dark:stroke-white" /> */}
              {copySuccess}
            </button>
          </div>
        </div>
      )}
    </BaseModal>
  );
};
