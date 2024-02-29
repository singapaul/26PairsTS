import React from "react";

import { useAppDispatch,useAppSelector } from "@/store/hooks";
import {
  resetModalConfig,
  selectActiveModalId,
  selectModalIsOpen,
  selectModalProps,
} from "@/store/slices/modals";

import {
  AboutModal,
  ContactModal,
  GameModesModal,
  InfoModal,
  PlayedModal,
  ScoreModal,
  SettingsModal,
  StatsModal,
  TACModal,
} from "../Components";
type modalLookupProps = {
  [key: string]: React.ElementType;
};

const lookupModal: modalLookupProps = {
  about: AboutModal,
  settings: SettingsModal,
  contact: ContactModal,
  info: InfoModal,
  played: PlayedModal,
  score: ScoreModal,
  stats: StatsModal,
  tac: TACModal,
  gameModes: GameModesModal,
};

export const ModalRegistry = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const id = useAppSelector(selectActiveModalId);
  const isOpen = useAppSelector(selectModalIsOpen);
  const props = useAppSelector(selectModalProps);

  const toggleIsOpen = () => {
    dispatch(resetModalConfig());
  };

  if (id && isOpen) {
    const Modal: React.ElementType = lookupModal[id];
    if (Modal)
      return <Modal isOpen={isOpen} handleClose={toggleIsOpen} {...props} />;
  }
  return <></>;
};
