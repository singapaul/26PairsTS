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
    <BaseModal title="Game Modes" isOpen={isOpen} handleClose={handleClose}>
      <div className="flex flex-col gap-4 min-w-80">
        <p className="text-left text-base text-gray-700 dark:text-gray-50">
          {GameModesModalDescription}
        </p>
        <GameModeTile
          title="DAILY SHUFFLE"
          link={dailyShuffle}
          gameDetails={{ difficulty: "easy", numCards: 12, time: "Avg. 1-2 mins" }}
          handleClose={handleClose}
          difficulty="DAILY_SHUFFLE"
        />
        <GameModeTile
          title="CLASSIC SHUFFLE"
          link={classicShuffle}
          gameDetails={{ difficulty: "hard", numCards: 26, time: "Avg. 2-3 mins" }}
          handleClose={handleClose}
          difficulty="CLASSIC_SHUFFLE"
        />
        <GameModeTile
          title="LITE SHUFFLE"
          link={liteShuffle}
          gameDetails={{ difficulty: "easy", numCards: 12, time: "Avg. 1-2 mins" }}
          handleClose={handleClose}
          difficulty="LITE_SHUFFLE"
        />
      </div>
    </BaseModal>
  );
};
