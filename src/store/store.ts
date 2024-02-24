import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter'
import displayWelcomeMenuReducer from './slices/displayWelcomeMenu'
import finishedGameStatsReducer from './slices/finishedGameStats'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    displayWelcomeMenuSlice: displayWelcomeMenuReducer,
    finishedGameStats: finishedGameStatsReducer,
  },
})

export default store
