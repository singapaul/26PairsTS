import React from "react";

import { useAppSelector } from "@/store/hooks";
import { BaseModal } from "./BaseModal";
import type { DifficultyKeys } from "@/store/slices/historicStats";

// @todo pass the difficulty in as a prop
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
