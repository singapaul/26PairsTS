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

console.log('wagwan my guy from stats modal')
console.log(gameStats)
// need to handle the sitation where gameStats is a string




  return (
    <BaseModal title="Statistics" isOpen={isOpen} handleClose={handleClose}>
      <>
        <div className="my-2 flex justify-center">
          <div className="m-1 w-1/4 items-center justify-center dark:text-white">
            <div className="text-3xl font-bold">{gameStats.bestTurns}</div>
            <div className="text-xs">{"Best Turns"}</div>
          </div>
          <div className="m-1 w-1/4 items-center justify-center dark:text-white">
            <div className="text-3xl font-bold">{gameStats.bestTime}</div>
            <div className="text-xs">{"Best Time"}</div>
          </div>
          <div className="m-1 w-1/4 items-center justify-center dark:text-white">
            <div className="text-3xl font-bold">{gameStats.gamesPlayed}</div>
            <div className="text-xs">{"Games Played"}</div>
          </div>
        </div>
      </>
    </BaseModal>
  );
};

export default StatsModal;
