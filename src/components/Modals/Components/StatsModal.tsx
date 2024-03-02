import React from "react";

import { useAppSelector } from "@/store/hooks";
import { formatSecondsToMMSS } from "@/utils";

import { BaseModal } from "./BaseModal";

// formatSecondsToMMSS
import type { DifficultyKeys } from "@/store/slices/historicStats";
export const StatsModal = ({
  isOpen,
  handleClose,
  gameDifficulty,
}: {
  isOpen: boolean;
  handleClose: () => void;
  gameDifficulty: DifficultyKeys;
}) => {
  const gameStats = useAppSelector((state) => state.stats[gameDifficulty]);

  return (
    <BaseModal title="Statistics" isOpen={isOpen} handleClose={handleClose}>
      <>
        <div className="my-2 flex justify-center">
          <div className="m-1 w-1/4 items-center justify-center dark:text-white">
            <div className="text-2xl font-bold">{gameStats.bestTurns}</div>
            <div className="text-xs whitespace-nowrap">{"Best Turns"}</div>
          </div>
          <div className="m-1 w-1/4 items-center justify-center dark:text-white">
            <div className="text-2xl font-bold">
              {formatSecondsToMMSS(gameStats.bestTime)}
            </div>
            <div className="text-xs whitespace-nowrap">{"Best Time"}</div>
          </div>
          <div className="m-1 w-1/4 items-center justify-center dark:text-white">
            <div className="text-2xl font-bold">{gameStats.gamesPlayed}</div>
            <div className="text-xs  whitespace-nowrap">{"Games Played"}</div>
          </div>
        </div>
      </>
    </BaseModal>
  );
};

export default StatsModal;
