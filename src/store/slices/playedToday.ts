import { createSlice } from '@reduxjs/toolkit'

import { LOCAL_STORAGE_KEY_NAME_DAILY } from '@/settings'
import { checkPlayedToday } from '@/utils'

import { RootState } from '../store'
type PlayedTodayType = {
  value: boolean
}
// If there is a completed game we need to passs completed game stats to the modal

const initialState: PlayedTodayType = {
  value: checkPlayedToday(LOCAL_STORAGE_KEY_NAME_DAILY) ,
}

export const PlayedTodaySlice = createSlice({
  name: 'playedToday',
  initialState,
  reducers: {
    setHasPlayedToday: (state) => {
      state.value = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { setHasPlayedToday } =
  PlayedTodaySlice.actions

export default PlayedTodaySlice.reducer


export const selectHasPlayedToday = (state: RootState): PlayedTodayType['value'] =>state.playedToday.value
 