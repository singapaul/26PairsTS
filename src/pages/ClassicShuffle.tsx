import React from "react";

import { CLASSICDECK } from "@/assets/data";
import { Board } from "@/components/composed/Game/Board";
import { ModalRegistry } from "@/components/Modals";
import { CLASSIC_SHUFFLE} from "@/settings";
import { assignIDToCards, shuffleArray } from "@/utils";
 
const ClassicShuffle = ({ path }: { path: string }) => {
  const shuffledArray = shuffleArray(CLASSICDECK)
  const IDArray = assignIDToCards(shuffledArray)
  return (
    <>
      <Board duplicatedCards={IDArray} gameDifficulty={CLASSIC_SHUFFLE} />
      <ModalRegistry />
    </>
  );
};

export default ClassicShuffle;
