import React, { useState, useEffect } from "react";
import { startOfTomorrow } from "date-fns";
import Countdown from "react-countdown";
import { useCopyToClipboard } from "@/utils";
import { getGameTitle } from "../../../utils/getGameTitle";
import { BaseModal } from "./BaseModal";
import { formatTime, timeUntilTomorrow } from "@/utils";
// @todo pass the difficulty in as a prop
export const StatsModal = ({
  isOpen,
  handleClose,
  gameDifficulty,
}: {
  isOpen: boolean, 
  handleClose: () => void, 
  gameDifficulty: string
}) => {
  const [gamesPlayed, setGamesPlayed] = useState<string | number>("-");
  const [bestTime, setBestTime] = useState<string | number>("-");
  const [bestTurns, setBestTurns] = useState<string |number>("-");
 
  const getHistoricStats = () => {
    const val = JSON.parse(localStorage.getItem("scoreHistory"));

    const filteredByDifficulty = val?.filter(
      (score: { difficulty: string; }) => score.difficulty == gameDifficulty
    );

    if (!val || !filteredByDifficulty || filteredByDifficulty.length < 1) {
      setGamesPlayed("-");
      setBestTime("-");
      setBestTurns("-");
      return;
    }

    const result = {
      lowestTime: Infinity,
      lowestMoves: Infinity,
    };

    filteredByDifficulty.forEach((item: { time: string; moves: string; }) => {
      const { time, moves } = item;

      // Update lowest time if current time is smaller
      result.lowestTime = Math.min(result.lowestTime, parseInt(time));

      // Update lowest moves if current moves is smaller
      result.lowestMoves = Math.min(result.lowestMoves, parseInt(moves));
    });
 
    const formattedTime = formatTime(result.lowestTime)
    setBestTime(formattedTime);
    setBestTurns(result.lowestMoves);
    setGamesPlayed(filteredByDifficulty.length);
  };

  useEffect(() => {
    getHistoricStats();
  }, [isOpen]);

 

  const { copySuccess, copyToClipboard}  =  useCopyToClipboard({
    time: 'finalTime',
    turns: 'finalTurns',
    mode: "Daily",
  });
  

  return (
    <BaseModal title="Statistics" isOpen={isOpen} handleClose={handleClose}>
      <>
        <div className="my-2 flex justify-center">
          <div className="m-1 w-1/4 items-center justify-center dark:text-white">
            <div className="text-3xl font-bold">{bestTurns}</div>
            <div className="text-xs">{"Best Turns"}</div>
          </div>
          <div className="m-1 w-1/4 items-center justify-center dark:text-white">
            <div className="text-3xl font-bold">{bestTime}</div>
            <div className="text-xs">{"Best Times"}</div>
          </div>
          <div className="m-1 w-1/4 items-center justify-center dark:text-white">
            <div className="text-3xl font-bold">{gamesPlayed}</div>
            <div className="text-xs">{"Games Played"}</div>
          </div>
        </div>
        <div className="mt-5 columns-2 items-center  justify-center text-center dark:text-white sm:mt-6">
          <div className="inline-block w-full text-left">
            <div>
              <h5>{"Next shuffle in"}</h5>
              <Countdown
                className="text-lg font-medium text-gray-900 dark:text-gray-100"
                date={Date.now() + timeUntilTomorrow()}
                daysInHours={true}
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
              onClick={copyToClipboard}
            >
              {copySuccess}
            </button>
          </div>
        </div>
      </>
    </BaseModal>
  );
};

export default StatsModal;
