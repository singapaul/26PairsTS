import React from "react";
import { CiStopwatch } from "react-icons/ci";
import { HiSquare3Stack3D } from "react-icons/hi2";
type ScoreContainerProps = {
  turns: number;
  seconds: number;
};

const ScoreContainer = ({ turns, seconds }: ScoreContainerProps) => {
  const bestScore = turns + seconds
  return (
    <div className="flex items-center gap-4">
        <div className="flex flex-col">
      <p className="text-5xl font-bold">{bestScore}</p>
      <p>Total score</p>
      </div>
      <div className="flex flex-col">
      <div className="flex items-center gap-2">  {/* Icons and text on the same line */}
          <HiSquare3Stack3D /> 
          <span>{turns} Turns</span>
        </div>
        <div className="flex items-center gap-2">  {/* Icons and text on the same line */}
          <CiStopwatch />
          <span>{seconds} Moves</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreContainer;
