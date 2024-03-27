/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Countdown from "react-countdown";
import { navigate } from "gatsby";

import { classicShuffle, liteShuffle } from "@/routes/route_strings";
import { LOCAL_STORAGE_KEY_NAME_DAILY } from "@/settings";
import { useAppSelector } from "@/store/hooks";
import { formatSecondsToMMSS, timeUntilTomorrow } from "@/utils";
import { useCopyToClipboard } from "@/utils";

import { BaseModal } from "./BaseModal";

import type { gameDataObjectType } from "@/utils/saveGameStatsToLocalStorage";

// this is just a daily shuffle modal -@todo rename
// so maybe lets make it check local storage

export const PlayedModal = ({
  isOpen,
  handleClose,
  gameDifficulty,
}: {
  isOpen: boolean;
  handleClose: () => void;
  gameDifficulty?: string;
}) => {
  const getTodayGame = (): gameDataObjectType => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY_NAME_DAILY);
    const JSONDATA = JSON.parse(data || "[]");
    const todayGame: gameDataObjectType = JSONDATA.pop() || { turns: 0, time: 0 , score: 0, date: 0};
    return todayGame;
  };

  const { turns, time } = getTodayGame();

  const { copySuccess, copyToClipboard } = useCopyToClipboard({
    time: formatSecondsToMMSS(time),
    turns: turns,
    mode: "Daily",
  });

  return (
    <BaseModal
      title="Score"
      isOpen={isOpen}
      handleClose={() => console.log("")}
      hideCloseButton
    >
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Congratulations on beating todays daily shuffle! Come back tommorow to
          beat your score.
        </p>
      </div>

      <div className="my-2 flex justify-center">
        <div className="m-1 w-1/4 items-center justify-center dark:text-white">
          <div className="text-3xl font-bold">{turns}</div>
          <div className="text-xs">{"Turns"}</div>
        </div>
        <div className="m-1 w-1/4 items-center justify-center dark:text-white">
          <div className="text-3xl font-bold">{formatSecondsToMMSS(time)}</div>
          <div className="text-xs">{"Time"}</div>
        </div>
      </div>

      {/* need to pass in a prop to say if the game is over or not */}
      {(true || true) && (
        <div className="mt-5 columns-2 items-center  justify-center text-center dark:text-white sm:mt-6">
          <div className="inline-block w-full text-left">
            {true && (
              <div>
                <h5>{"Next shuffle in"}</h5>
                <Countdown
                  className="text-lg font-medium text-gray-900 dark:text-gray-100"
                  date={Date.now() + timeUntilTomorrow()}
                  daysInHours={true}
                />
              </div>
            )}
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                copyToClipboard();
              }}
              className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
            >
              {copySuccess}
            </button>
          </div>
        </div>
      )}
      <h3 className="font-semibold mt-6">Check out the other game modes</h3>
      <div className="mt-2 columns-2 items-center  justify-center text-center dark:text-white  ">
        <div>
          <button
            type="button"
            onClick={() => navigate(liteShuffle)}
            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
          >
            Lite Shuffle
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => () => navigate(classicShuffle)}
            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
          >
            Classic Shuffle
          </button>
        </div>
      </div>
    </BaseModal>
  );
};
