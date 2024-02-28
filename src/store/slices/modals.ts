import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ModalIds =
  | "about"
  | "settings"
  | "contact"
  | "info"
  | "played"
  | "score"
  | "stats"
  | "tac"
  | "gameModes"
  | null;

type ModalState = {
  isOpen: boolean;
  id: ModalIds;
  props?: Record<string, unknown>;
};

const initialState: ModalState = {
  isOpen: false,
  id: null,
  props: {},
};

export const openModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalConfig: (
      state,
      action: {
        payload: ModalState;
      }
    ) => {
      state.isOpen = action.payload.isOpen;
      state.id = action.payload.id;
      state.props = action.payload.props || { ...state.props };
    },
    resetModalConfig: (state) => {
      state.isOpen = false;
      state.id = null;
      state.props = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { setModalConfig, resetModalConfig } = openModalSlice.actions;

export default openModalSlice.reducer;

export const selectActiveModalId = (state: RootState): ModalState["id"] =>
  state.modal.id;
export const selectModalIsOpen = (state: RootState): ModalState["isOpen"] =>
  state.modal.isOpen;
export const selectModalProps = (state: RootState): ModalState["props"] =>
  state.modal.props;
