import React from "react";
import { CiStopwatch } from "react-icons/ci";
import { FaBrain } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { navigate } from "gatsby";

import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/store/hooks";
import { setDifficulty } from "@/store/slices/difficulty";

import type { DifficultyType } from "@/store/slices/difficulty";


type GameModeTileProps = {
  title: string;
  link: string;
  gameDetails: GameDetails;
  handleClose: () => void;
  difficulty: DifficultyType;
};

type GameDetails = {
  numCards: number;
  difficulty: string;
  time: string;
};

export const GameModeTile = ({
  title,
  link,
  gameDetails,
  handleClose,
  difficulty,
}: GameModeTileProps) => {

  const dispatch = useAppDispatch()
  const handleClickLink = () => {
    navigate(link);
    dispatch(setDifficulty(difficulty))
    handleClose();
  };

  return (
    <div className="flex rounded justify-between items-center bg-slate-50 dark:bg-gray-800 p-2 gap-2 dark:border-solid dark:border-white dark:border-[1px]">
      <div className="flex flex-col items-start">
        <h2 className="text-[12px] text-left sm:text-base font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="flex text-[10px] gap-1 sm:text-sm text-gray-900 dark:text-gray-300">
          <div className="flex w-full gap-1 items-center">
            <FaCalculator />
            <p className="whitespace-nowrap">{gameDetails.numCards} pairs</p>
          </div>
          <div className="flex w-full gap-1 items-center">
            <FaBrain />
            <p className="whitespace-nowrap">{gameDetails.difficulty}</p>
          </div>
          <div className="flex w-full gap-1 items-center">
            <CiStopwatch />
            <p className="whitespace-nowrap">{gameDetails.time}</p>
          </div>
        </div>
      </div>
      <Button
        className="text-[10px] whitespace-nowrap min-w-28 sm:w-min sm:min-w-52 sm:text-sm  text-white dark:text-white bg-blue-500 dark:bg-blue-700"
        onClick={handleClickLink}
      >
        {title}
      </Button>
    </div>
  );
};
