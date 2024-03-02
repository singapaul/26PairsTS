import React from "react";
import {isSameDay} from 'date-fns'

import { Board } from "@/components/composed/Game/Board";
import { ModalRegistry } from "@/components/Modals";
import { useFetchShuffledCards } from "@/hooks";
import { DAILY_SHUFFLE } from "@/settings";
const DailyShuffle = ({ path }: { path: string }) => {
  const { duplicatedCards, isLoading, error } = useFetchShuffledCards();

  // @add a suspense in here?


console.log('whats up')
const today = new Date()
const alsoToday  =new Date()
// const tommorow = new Date() + 24
// const laterToday = new Date() +2
console.log(isSameDay(today, alsoToday))
  return (
    <>
      <Board duplicatedCards={duplicatedCards} gameDifficulty={DAILY_SHUFFLE} />
      <ModalRegistry />
    </>
  );
};

export default DailyShuffle;
