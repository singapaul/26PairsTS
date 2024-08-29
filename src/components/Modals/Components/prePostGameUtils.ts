import { CLASSIC_SHUFFLE, DAILY_SHUFFLE, LITE_SHUFFLE } from "@/settings";
import { getLocalStorageKeyFromGameMode } from "@/utils";

type GameRecord = {
    time: string;
    turns: string;
    score: string;
    date: string;
  };

export const getTodaysGame = (
    difficulty:
      | typeof CLASSIC_SHUFFLE
      | typeof DAILY_SHUFFLE
      | typeof LITE_SHUFFLE
  ) => {
    if (typeof window !== "undefined") {
      const key = getLocalStorageKeyFromGameMode(difficulty);
  
      const storedValue = window.localStorage.getItem(key);
  
      if (storedValue !== null) {
        // storedValue will be an array of scores or null
        const gameDataArray = JSON.parse(storedValue);
  
        const todaysGame = gameDataArray.slice(-1)[0];
  
        return {
          timeToday: Number(todaysGame.time) || 0,
          turnsToday: Number(todaysGame.turns) || 0,
        };
      }
    }
  };
  

  export const getGameStats = (
    difficulty:
      | typeof CLASSIC_SHUFFLE
      | typeof DAILY_SHUFFLE
      | typeof LITE_SHUFFLE
  ): GameRecord => {
    if (typeof window !== "undefined") {
      const key = getLocalStorageKeyFromGameMode(difficulty);
      const storedValue = window.localStorage.getItem(key);
      if (storedValue !== null) {
        // storedValue will be an array of scores or null
        const gameDataArray = JSON.parse(storedValue);
        return getLatest(gameDataArray);
      }
      return {
        time: "-",
        turns: "-",
        score: "-",
        date: "-",
      };
    }
    return {
      time: "-",
      turns: "-",
      score: "-",
      date: "-",
    };
  };

 export  const getLatest = (records: GameRecord[]): GameRecord => {
    if (records.length === 0) {
      return {
        time: "-",
        turns: "-",
        score: "-",
        date: "-",
      };
    }

    return records[records.length - 1];
  };

  export const getModalHeader = (gameMode: string): string => {
    // Match the gameMode with its corresponding local storage key
    switch (gameMode) {
      case CLASSIC_SHUFFLE:
        return "Classic Shuffle";
      case DAILY_SHUFFLE:
        return "Daily Shuffle";
      case LITE_SHUFFLE:
        return "Lite Shuffle";
      default:
        // Handle case where the gameMode does not match any known type
        return "Lite Shuffle";
    }
  };