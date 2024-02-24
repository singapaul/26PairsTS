import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const displayWelcomeMenuSlice = createSlice({
  name: 'displayWelcomeMenu',
  initialState,
  reducers: {
    showWelcomeMenu: (state) => {
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
