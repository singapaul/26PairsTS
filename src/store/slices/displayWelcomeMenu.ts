import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const displayWelcomeMenuSlice = createSlice({
  name: 'displayWelcomeMenu',
  initialState,
  reducers: {
    showWelcomeMenu: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true
    },
    hideWelcomeMenu: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { showWelcomeMenu, hideWelcomeMenu } =
  displayWelcomeMenuSlice.actions

export default displayWelcomeMenuSlice.reducer
