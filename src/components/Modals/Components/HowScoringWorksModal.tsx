import React from "react";

import { Button } from "@/components/ui/button";

import { BaseModal } from "./BaseModal";

export const HowScoringWorksModal = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
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
        <div className="flex flex-col">
          <Button>Flip Cards</Button>
          <Button variant={"secondary"}>Go back</Button>
        </div>
      </section>
    </BaseModal>
  );
};
