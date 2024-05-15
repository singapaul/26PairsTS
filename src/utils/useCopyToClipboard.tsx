import { useState } from "react";

import { useFetchShuffledCards } from "@/hooks";
import { classicShuffle, dailyShuffle, liteShuffle } from "@/routes/route_strings";
import { CLASSIC_SHUFFLE, DAILY_SHUFFLE, LITE_SHUFFLE } from "@/settings";

import { isMobile } from "./isMobile";
function timeToSeconds(time: string) {
  const [minutes, seconds] = time.split(":").map(Number);
  return (minutes * 60) + seconds;
}

export const useCopyToClipboard = ({
  time,
  turns,
  mode,
  link = 'www.26pairs.com',
}: {
  time: number;
  turns: string;
  mode: typeof CLASSIC_SHUFFLE | typeof LITE_SHUFFLE | typeof DAILY_SHUFFLE;
  link?: string
}) => {
  const [copySuccess, setCopySuccess] = useState("Challenge a friend");
 


  // const timeInSeconds: number = timeToSeconds(time)
 
  const {gameID} = useFetchShuffledCards()
  const score =  (time) + Number.parseInt(turns)

  let modeDescription: string;
  switch (mode) {
    case DAILY_SHUFFLE:
      modeDescription = `New 26Pairs Challenge 🔥

Daily Shuffle #${gameID}
My score: ${score} 🎉
      
Can you beat me? www.26pairs.com${dailyShuffle}`;
      break;
    case CLASSIC_SHUFFLE:
      modeDescription = `New 26Pairs Challenge 🔥

Classic Shuffle
My score: ${score} 🎉
      
Can you beat me? www.26pairs.com${classicShuffle}`;
      break;
    case LITE_SHUFFLE:
      modeDescription = `New 26Pairs Challenge 🔥
      
Lite Shuffle
My score: ${score} 🎉
      
Can you beat me? www.26pairs.com${liteShuffle}`
      break;
    default:
      modeDescription = `My score: ${score} 🎉
      
Can you beat me? www.26pairs.com${dailyShuffle}`;
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(modeDescription);
      if (isMobile()) await navigator.share({ text: modeDescription });
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Share results");
      console.error("Unable to copy to clipboard.", err);
    }

    // Reset the copy success message after a short delay
    setTimeout(() => {
      setCopySuccess("Share results");
    }, 2000);
  };

  return { copyToClipboard, copySuccess };
};
