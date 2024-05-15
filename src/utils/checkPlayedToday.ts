import { isSameDay } from "date-fns";

import type { gameDataObjectType } from "./saveGameStatsToLocalStorage";

export const checkPlayedToday = (LOCAL_STORAGE_KEY_NAME: string): boolean => {
  if (typeof window !== "undefined") {
    const storedData: string | null = localStorage.getItem(
      LOCAL_STORAGE_KEY_NAME
    );
    if (!storedData) {
      console.log('theres no stored data')
      // if there is no stored data, return false
      return false;
    }
    // Parse the JSON string back into an array
    const scoreArray: gameDataObjectType[] = JSON.parse(storedData);
    return scoreArray.some((entry) => isSameDay(entry.date, new Date()));
  }
  return false
};
