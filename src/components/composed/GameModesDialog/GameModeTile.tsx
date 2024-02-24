import React from "react";
import { Button } from "@/components/ui/button";
import { navigate } from "gatsby";

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
    <div className="flex rounded justify-between items-center bg-white p-2">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex gap-4">
          <p>{gameDetails.numCards} cards</p>
          <p>{gameDetails.difficulty}</p>
          <p>Avg. {gameDetails.time} mins</p>
        </div>
      </div>
      <Button onClick={() => navigate(link)}>Play {title}</Button>
    </div>
  );
};
