import React from "react";

import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/store/hooks";
import { setModalConfig } from "@/store/slices/modals";

import { BaseModal } from "./BaseModal";
export const HowScoringWorksModal = ({
  isOpen,
  handleClose,
  handleRevealCards,
}: {
  isOpen: boolean;
  handleClose: () => void;
  handleRevealCards: () => () => void,
}) => {

const dispatch = useAppDispatch()

  const handleGoBack = () => {
    dispatch(setModalConfig({
      id: 'preGame', 
      isOpen: true,
    }))
  }


  const handleFlipCards = () => {
    handleClose()
    handleRevealCards()
  }
  return (
    <BaseModal
      title="How Scoring Works"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
        <p>At the end of the game, you'll be given a total score.</p>
        <p>
          Your total score is a combination of your total moves + the number of
          seconds it take you to complete the game.
        </p>
        <p>
          e.g. <span className="font-bold">38</span> moves in{" "}
          <span className="font-bold">74</span> seconds would give you a score
          of <span className="font-bold">112</span> (38+74).
        </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row sm:justify-between">
          <Button onClick={handleFlipCards}>Flip Cards</Button>
          <Button variant={"secondary"} onClick={handleGoBack}>Go back</Button>
        </div>
      </section>
    </BaseModal>
  );
};
