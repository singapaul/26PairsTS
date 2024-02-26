import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GameModeTile } from "./GameModeTile";
import { classicShuffle, dailyShuffle, liteShuffle } from "@/routes/route_strings";

type GameModesDialogProps = {
  children: any;
};

// @todo is there another way to trigger this open?
// https://github.com/shadcn-ui/ui/issues/386
export const GameModesDialog = ({ children }: GameModesDialogProps) => {
  return (
    <>
      <Dialog>
        {children}
        <DialogContent className="bg-gray-100">
          <DialogHeader>
            <DialogTitle className="text-left font-bold text-3xl">Game Modes</DialogTitle>
            <DialogDescription className="text-left">
              Check out the rest of the game modes below
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-4">
              <GameModeTile
                title="Daily Shuffle"
                link={dailyShuffle}
                gameDetails={{
                  numCards: 26,
                  difficulty: "easy",
                  time: "55",
                }}
              />
              <GameModeTile
                title="Classic Mode"
                link={classicShuffle}
                gameDetails={{
                  numCards: 52,
                  difficulty: "Challenging",
                  time: "125",
                }}
              />
              <GameModeTile
                title="Lite Mode"
                link={liteShuffle}
                gameDetails={{
                  numCards: 26,
                  difficulty: "easy",
                  time: "55",
                }}
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
