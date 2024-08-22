import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

const initialState: boolean = false;

export const LoadingSlice = createSlice({
  name: "playedToday",
  initialState,
  reducers: {
    setIsLoading: (state) => (state = true),
    setIsNotLoading: (state) => (state = false),
  },
});

// Action creators are generated for each case reducer function
export const { setIsLoading, setIsNotLoading} = LoadingSlice.actions;

export default LoadingSlice.reducer;

export const selectLoadingState = (
  state: RootState
): boolean => state.loading;
