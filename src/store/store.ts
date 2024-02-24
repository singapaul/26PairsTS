import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter'
import displayWelcomeMenuReducer from './slices/displayWelcomeMenu'
import finishedGameStatsReducer from './slices/finishedGameStats'
import openModalReducer from './slices/modals'
import timerReducer from './slices/timer'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    displayWelcomeMenuSlice: displayWelcomeMenuReducer,
    finishedGameStats: finishedGameStatsReducer,
    modal: openModalReducer,
    timer: timerReducer,
  },
})

export default store


 // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch