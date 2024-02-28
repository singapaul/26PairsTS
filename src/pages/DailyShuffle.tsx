import React from "react";
import { Board } from "@/components/composed/Game/Board";
import { DAILY_SHUFFLE } from "@/settings";
import { ModalRegistry } from "@/components/Modals";
import { useFetchShuffledCards } from "@/hooks";
const DailyShuffle = ({ path }: { path: string }) => {

  const { duplicatedCards, isLoading, error } = useFetchShuffledCards()

  // @add a suspense in here?
  return (
    <>
      <Board duplicatedCards={duplicatedCards} gameDifficulty={DAILY_SHUFFLE} />
      <ModalRegistry />
    </>
  );
};

export default DailyShuffle;
