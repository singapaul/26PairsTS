import React from "react";

import { CLASSICDECKLITE } from '@/assets/data';
import { Board } from "@/components/composed/Game/Board";
import { ModalRegistry } from "@/components/Modals";
import { LITE_SHUFFLE } from "@/settings";
import { assignIDToCards, shuffleArray } from "@/utils";

const LiteShuffle = ({ path }: { path: string }) => {

 
  const shuffledArray = shuffleArray(CLASSICDECKLITE)
  const IDArray = assignIDToCards(shuffledArray)
 
  return (
    <>
      <Board duplicatedCards={IDArray} gameDifficulty={LITE_SHUFFLE} />
      <ModalRegistry />
    </>
  );
};

export default LiteShuffle;
