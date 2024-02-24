import React from "react";
import {
  AboutModal,
  SettingsModal,
  ContactModal,
  InfoModal,
  PlayedModal,
  ScoreModal,
  StatsModal,
  TACModal,
} from "../Components";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  selectActiveModalId,
  selectModalIsOpen,
  selectModalProps,
  resetModalConfig,
} from "@/store/slices/modals";
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
