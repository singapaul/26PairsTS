import { createSlice } from '@reduxjs/toolkit'


export type GameStatsType = {
  moves: number
  score: number
  finalTime: number
}

const initialState: GameStatsType = {
  moves: 0,
  score: 0,
  finalTime: 0,
}

export const finishedGameStatsSlice = createSlice({
  name: 'finishedGameStats',
  initialState,
  reducers: {
    updateMoves: (state) => {
      state.moves += 1
    },
    resetMoves: (state) => {
      state.moves = 0
    },
    updateScore: (state, action) => {
      state.score = action.payload
    },
    updateFinalTime: (state, action) => {
      state.finalTime = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateMoves, updateScore, resetMoves, updateFinalTime } =
  finishedGameStatsSlice.actions


export const selectFinishedGameStats = (state: { finishedGameStats: GameStatsType }): GameStatsType => state.finishedGameStats
export default finishedGameStatsSlice.reducer
