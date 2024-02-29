import React from "react";

import { GameModesModalDescription } from "@/assets/copy";
import { GameModeTile } from "@/components/composed/GameModesTile/GameModeTile";
import {
  classicShuffle,
  dailyShuffle,
  liteShuffle,
} from "@/routes/route_strings";

import { BaseModal } from "./BaseModal";
export const GameModesModal = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <div className="flex flex-col gap-4 min-w-80">
        <p className="text-left text-base text-gray-700 dark:text-gray-50">
          {GameModesModalDescription}
        </p>
        <GameModeTile
          title="DAILY SHUFFLE"
          link={dailyShuffle}
          gameDetails={{ difficulty: "easy", numCards: 24, time: "55 s" }}
        />
        <GameModeTile
          title="CLASSIC SHUFFLE"
          link={classicShuffle}
          gameDetails={{ difficulty: "hard", numCards: 52, time: "180 s" }}
        />
        <GameModeTile
          title="LITE SHUFFLE"
          link={liteShuffle}
          gameDetails={{ difficulty: "easy", numCards: 24, time: "75 s" }}
        />
      </div>
    </BaseModal>
  );
};
