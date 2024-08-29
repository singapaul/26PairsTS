import { useState } from "react";

import { useFetchShuffledCards } from "@/hooks";
import { classicShuffle, dailyShuffle, liteShuffle } from "@/routes/route_strings";
import { CLASSIC_SHUFFLE, DAILY_SHUFFLE, LITE_SHUFFLE } from "@/settings";

import { isMobile } from "./isMobile";
 

export const useCopyToClipboard = ({
  time,
  turns,
  mode,
  link = 'www.26pairs.com',
}: {
  time: number| undefined;
  turns: number | undefined;
  mode: typeof CLASSIC_SHUFFLE | typeof LITE_SHUFFLE | typeof DAILY_SHUFFLE;
  link?: string
}) => {
  const [copySuccess, setCopySuccess] = useState("Challenge a friend");
 

 
  const {gameID} = useFetchShuffledCards()
  const score = (Number(time) +Number(turns)) || 0

  let modeDescription: string;
  switch (mode) {
    case DAILY_SHUFFLE:
      modeDescription = `New 26Pairs Challenge 🔥

Daily Shuffle #${gameID}
My score: ${score} 🎉
      
Your turn...
www.26pairs.com${dailyShuffle}`;
      break;
    case CLASSIC_SHUFFLE:
      modeDescription = `New 26Pairs Challenge 🔥

Classic Shuffle
My score: ${score} 🎉
      
Your turn...
www.26pairs.com${classicShuffle}`;
      break;
    case LITE_SHUFFLE:
      modeDescription = `New 26Pairs Challenge 🔥
      
Lite Shuffle
My score: ${score} 🎉
      
Your turn...
www.26pairs.com${liteShuffle}`
      break;
    default:
      modeDescription = `My score: ${score} 🎉
      
Your turn...
www.26pairs.com${dailyShuffle}`;
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
