import React from "react";
import { Button } from "@/components/ui/button";
import { navigate } from "gatsby";
import { GameBadge } from "./GameBadge";
import { FaBrain } from "react-icons/fa";
import { CiStopwatch } from "react-icons/ci";
import { FaCalculator } from "react-icons/fa";
type GameModeTileProps = {
  title: string;
  link: string;
  gameDetails: GameDetails;
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
}: GameModeTileProps) => {
  return (
    <div className="flex rounded justify-between items-center bg-white p-2 gap-2">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <GameBadge icon={<FaCalculator />} text={gameDetails.numCards + 'pairs'}/>
          <GameBadge icon={<FaBrain />} text={gameDetails.difficulty}/>
          <GameBadge icon={<CiStopwatch />} text={'Avg. time ' + gameDetails.time + 's'}/>
        </div>
      </div>
      <Button className="w-32" onClick={() => navigate(link)}>Play {title}</Button>
    </div>
  );
};
