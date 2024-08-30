import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CLASSIC_SHUFFLE,DAILY_SHUFFLE, LITE_SHUFFLE} from '@/settings'

import { RootState } from '../store'

export type DifficultyType = typeof CLASSIC_SHUFFLE | typeof DAILY_SHUFFLE | typeof LITE_SHUFFLE

type gameDifficulty = {
  difficulty: DifficultyType
}

const initialState: gameDifficulty = {
  difficulty: DAILY_SHUFFLE
}

export const difficultySlice = createSlice({
  name: 'difficulty',
  initialState,
  reducers: {
    setDifficulty: (state, action:PayloadAction<DifficultyType>) => {
      state.difficulty = action.payload
    },
 
  },
})

// Action creators are generated for each case reducer function
export const { setDifficulty} =
  difficultySlice.actions

export default difficultySlice.reducer


export const currentDifficulty = (state: RootState): gameDifficulty['difficulty'] =>state.difficulty.difficulty
 