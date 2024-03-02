import React from "react";
import { isSameDay } from "date-fns";

import { Board } from "@/components/composed/Game/Board";
import { ModalRegistry } from "@/components/Modals";
import { useFetchShuffledCards } from "@/hooks";
import { DAILY_SHUFFLE } from "@/settings";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { setModalConfig } from "@/store/slices/modals";
import { selectHasPlayedToday } from "@/store/slices/playedToday";
const DailyShuffle = ({ path }: { path: string }) => {
  const { duplicatedCards, isLoading, error } = useFetchShuffledCards();
  const dispatch = useAppDispatch();


  const handlePress=  () => {
    dispatch(setModalConfig({
      id: 'played',
      isOpen: true
    }))
  }
  // @add a suspense in here?

  const hasPlayedToday: boolean = useAppSelector(selectHasPlayedToday)

if(hasPlayedToday){
  dispatch(setModalConfig({
    id: 'played',
    isOpen: true
  }))
}

  return (
    <>
      <Board duplicatedCards={duplicatedCards} gameDifficulty={DAILY_SHUFFLE} />
      <button  onClick={handlePress}>PRESS mE</button>
      <ModalRegistry />
    </>
  );
};

export default DailyShuffle;
