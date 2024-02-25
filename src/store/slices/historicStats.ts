import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  localStorageKeyNameDaily,
  localStorageKeyNameClassic,
  localStorageKeyNameLite,
} from "@/settings";

// Define a type for the slice state
type GameModeStats = {
  gamesPlayed: number;
  bestTurns: number;
  bestTime: number;
  bestScore: number;
};

type TwentySixStats = {
  dailyShuffle: GameModeStats | string;
  classicShuffle: GameModeStats | string;
  liteShuffle: GameModeStats | string;
};

// Function to safely get an item from localStorage
const getFromLocalStorage = (key: string, defaultValue: string): string => {
  // Check if window is defined (this makes this code safe to run on the server)
  if (typeof window !== "undefined") {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue !== null) {
      return storedValue;
    }
  }
  return defaultValue;
};

// Initial state setup using localStorage with fallback
const initialState: TwentySixStats = {
  dailyShuffle: getFromLocalStorage(localStorageKeyNameDaily, "-"),
  classicShuffle: getFromLocalStorage(localStorageKeyNameClassic, "-"),
  liteShuffle: getFromLocalStorage(localStorageKeyNameLite, "-"),
};

const historicStats = createSlice({
  name: "historicStats",
  initialState,
  reducers: {
    setValueDaily: (state, action: PayloadAction<string>) => {
      state.dailyShuffle = action.payload;
      // Optionally, update localStorage when the value changes
      if (typeof window !== "undefined") {
        window.localStorage.setItem(localStorageKeyNameDaily, action.payload);
      }
    },
  },
});

export const { setValueDaily } = historicStats.actions;

export default historicStats.reducer;
