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
  HowScoringWorksModal,
  HowToPlayModal,
  InfoModal,
  PostGameModal,        
  PreGameModal,
  ScoreModal,
  SettingsModal,
  StatsModal,
  TACModal} from "../Components";
type modalLookupProps = {
  [key: string]: React.ElementType;
};

const lookupModal: modalLookupProps = {
  about: AboutModal,
  settings: SettingsModal,
  contact: ContactModal,
  info: InfoModal,
  score: ScoreModal,
  stats: StatsModal,
  tac: TACModal,
  gameModes: GameModesModal,
  howToPlay: HowToPlayModal,
  howScoringWorks: HowScoringWorksModal,
  preGame: PreGameModal,
  postGame: PostGameModal,
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
