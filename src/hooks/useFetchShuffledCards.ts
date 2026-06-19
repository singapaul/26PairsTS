import { useEffect, useState } from "react";

import { CLASSICDECK, CLASSICDECKLITE } from "@/assets/data";
import {
  assignIDToCards,
  getDailyGameId,
  seededShuffle,
  shuffleArray,
} from "@/utils";

// Custom hook that produces the daily deck locally. The shuffle is seeded from
// the current UTC date so every player worldwide gets the same daily puzzle,
// with no backend dependency.
export const useFetchShuffledCards = () => {
  const [duplicatedCards, setDuplicatedCards] = useState<any[]>([]);
  const [gameID, setGameId] = useState<number>(0);

  useEffect(() => {
    const id = getDailyGameId();
    setGameId(id);
    const shuffled = seededShuffle(CLASSICDECKLITE, id);
    setDuplicatedCards(assignIDToCards(shuffled));
  }, []);

  // isLoading/error kept for API compatibility with DailyShuffle.tsx
  return { duplicatedCards, isLoading: false, error: null, gameID };
};

export const useFetchLocalCardsLite = () => {
  const [duplicatedCards, setDuplicatedCards] = useState<any[]>([]);

  useEffect(() => {
    const shuffledArray = shuffleArray(CLASSICDECKLITE);
    const IDArray = assignIDToCards(shuffledArray);
    setDuplicatedCards(IDArray);
  }, []);

  return { duplicatedCards };
};

export const useFetchLocalCardsClassic = () => {
  const [duplicatedCards, setDuplicatedCards] = useState<any[]>([]);

  useEffect(() => {
    const shuffledArray = shuffleArray(CLASSICDECK);
    const IDArray = assignIDToCards(shuffledArray);
    setDuplicatedCards(IDArray);
  }, []);

  return { duplicatedCards };
};