import { createSlice } from '@reduxjs/toolkit'


export type modalsStateType  = {
    aboutOpen: boolean
}

const initialState: modalsStateType = {
  aboutOpen: false,
}

export const openModalSlice = createSlice({
  name: 'displayModal',
  initialState,
  reducers: {
    showAbout: (state) => {
      state.aboutOpen = true
    },
    hideAbout: (state) => {
      state.aboutOpen = false
    },
  },
})

// Action creators are generated for each case reducer function
export const {  showAbout, hideAbout } =
  openModalSlice.actions

export default openModalSlice.reducer
