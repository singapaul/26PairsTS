import { useState } from "react";

import { useFetchShuffledCards } from "@/hooks";

import { isMobile } from "./isMobile";

export const useCopyToClipboard = ({
  time,
  turns,
  mode,
  link = 'www.26pairs.com',
}: {
  time: string;
  turns: string;
  mode: "Daily" | "Classic" | "Lite";
  link?: string
}) => {
  const [copySuccess, setCopySuccess] = useState("Share results");

  const {gameID} = useFetchShuffledCards()
  const score = Number.parseInt(time) + Number.parseInt(turns)

  let modeDescription: string;
  switch (mode) {
    case "Daily":
      modeDescription = `
      New 26Pairs Challenge 🔥

      Daily Shuffle #${gameID}
      My score: ${score} 🎉
      
      Can you beat me? www.26pairs.com/dailyshuffle
      `;
      break;
    case "Classic":
      modeDescription = `New 26Pairs Challenge 🔥

      Classic Shuffle
      My score: ${score} 🎉
      
      Can you beat me? www.26pairs.com/ClassicShuffle`;
      break;
    case "Lite":
      modeDescription = `New 26Pairs Challenge 🔥

      Lite Shuffle
      My score: ${score} 🎉
      
      Can you beat me? www.26pairs.com/LiteShuffle`
      break;
    default:
      modeDescription = "A mode for every mood.";
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
