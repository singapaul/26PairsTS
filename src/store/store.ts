import { configureStore } from '@reduxjs/toolkit'

import difficultyReducer from './slices/difficulty'
import displayWelcomeMenuReducer from './slices/displayWelcomeMenu'
import finishedGameStatsReducer from './slices/finishedGameStats'
import historicStatsReducer from './slices/historicStats'
import loadingReducer from './slices/loading'
import openModalReducer from './slices/modals'
import playedTodayReducer from './slices/playedToday'
import timerReducer from './slices/timer'
export const store = configureStore({
  reducer: {
    displayWelcomeMenuSlice: displayWelcomeMenuReducer,
    finishedGameStats: finishedGameStatsReducer,
    modal: openModalReducer,
    timer: timerReducer,
    stats: historicStatsReducer, 
    playedToday: playedTodayReducer,
    loading: loadingReducer,
    difficulty: difficultyReducer,
  },
})

export default store


 // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch