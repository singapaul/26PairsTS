import React from "react";
import { AboutModal } from "../AboutModal";
import { useAppSelector } from "@/store/hooks";
import { showAbout, hideAbout } from "@/store/slices/modals";
import { useDispatch } from "react-redux";
export const ModalRegistry = (): JSX.Element => {
  // @ts-ignore

  const dispatch = useDispatch();
  const isOpen = useAppSelector((state) => state.openModal.aboutOpen);

  const handlethisClose = () => {
    console.log("closing modal");
  };
 
  if (isOpen) {
    const Modal: React.ElementType = AboutModal;
    if (Modal)
      return (
        <Modal isOpen={isOpen} handleClose={() => dispatch(hideAbout())} />
      );
  }
  return <></>;
};
