// timerSlice.ts
import { createSlice  } from '@reduxjs/toolkit';

// Convert total seconds to MM:SS format
const formatTime = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

interface TimerState {
  timeInSeconds: number; // Store time in seconds for easier calculation
  formattedTime: string;
  isRunning: boolean; // Added to track if the timer is running
}

const initialState: TimerState = {
  timeInSeconds: 0, // Store time in seconds for easier calculation
  formattedTime: "00:00",
  isRunning: false, // Initial state of the timer is not running
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    increment: (state) => {
      state.timeInSeconds += 1;
      state.formattedTime = formatTime(state.timeInSeconds);
    },
    reset: (state) => {
      state.timeInSeconds = 0;
      state.formattedTime = "00:00";
    },
    start: (state) => {
      state.isRunning = true;
    },
    stop: (state) => {
      state.isRunning = false;
    },
    // Add other actions as needed, e.g., decrement, set specific time, etc.
  },
});

// Action creators are generated for each case reducer function
export const { increment, reset, start, stop } = timerSlice.actions;

export default timerSlice.reducer;
