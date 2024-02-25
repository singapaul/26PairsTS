import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  LOCAL_STORAGE_KEY_NAME_DAILY,
  LOCAL_STORAGE_KEY_NAME_CLASSIC,
  LOCAL_STORAGE_KEY_NAME_LITE,
} from "@/settings";
import type {
  gameDataObjectArrayType,
} from "@/utils/saveGameStatsToLocalStorage";

// Define a type for the slice state
type GameModeStats = {
  gamesPlayed: number | string;
  bestTurns: number | string;
  bestTime: number | string;
  bestScore: number | string;
};

type TwentySixStats = {
  DAILY_SHUFFLE: GameModeStats;
  CLASSIC_SHUFFLE: GameModeStats;
  LITE_SHUFFLE: GameModeStats;
};

export type DifficultyKeys = keyof TwentySixStats

const getStats = (data: gameDataObjectArrayType): GameModeStats => {
  let smallestTime = Number(data[0].time);
  let smallestTurns = Number(data[0].turns);
  let largestScore = Number(data[0].score);
  const gamesPlayed = Number(data.length);

  data.forEach((item) => {
    const time = Number(item.time);
    const turns = Number(item.turns);
    const score = Number(item.score);

    if (time < smallestTime) smallestTime = time;
    if (turns < smallestTurns) smallestTurns = turns;
    if (score > largestScore) largestScore = score;
  });

  return {
    bestTime: smallestTime,
    bestTurns: smallestTurns,
    bestScore: largestScore,
    gamesPlayed,
  };
};

// Function to safely get an item from localStorage
const getFromLocalStorage = (key: string) => {
  // Check if window is defined (this makes this code safe to run on the server)
  if (typeof window !== "undefined") {
    const storedValue = window.localStorage.getItem(key);

    if (storedValue !== null) {
      // storedValue will be an array of scores or null
      const gameDataArray: gameDataObjectArrayType = JSON.parse(storedValue);
      const { bestScore, bestTime, bestTurns, gamesPlayed } =
        getStats(gameDataArray);

      return {
        bestScore,
        bestTime,
        bestTurns,
        gamesPlayed,
      };
    }
  }
  //   @no data values
  return {
    gamesPlayed: "-",
    bestTurns: "-",
    bestTime: "-",
    bestScore: "-",
  };
};

// Initial state setup using localStorage with fallback
const initialState: TwentySixStats = {
    DAILY_SHUFFLE: getFromLocalStorage(LOCAL_STORAGE_KEY_NAME_DAILY),
    CLASSIC_SHUFFLE: getFromLocalStorage(LOCAL_STORAGE_KEY_NAME_CLASSIC),
    LITE_SHUFFLE: getFromLocalStorage(LOCAL_STORAGE_KEY_NAME_LITE),
};

const historicStats = createSlice({
  name: "historicStats",
  initialState,
  reducers: {
    setValueDaily: (state, action: PayloadAction<any>) => {
      state.DAILY_SHUFFLE = action.payload;
      // Optionally, update localStorage when the value changes
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          LOCAL_STORAGE_KEY_NAME_DAILY,
          action.payload
        );
      }
    },
    addToStats: (state, action: PayloadAction<any>) => {
      const newDataFromLocal = getFromLocalStorage(LOCAL_STORAGE_KEY_NAME_DAILY)
      const difficulty = action.payload as DifficultyKeys
      state[difficulty] = newDataFromLocal

      }
    }
  },
);

export const { setValueDaily, addToStats } = historicStats.actions;

export default historicStats.reducer;
