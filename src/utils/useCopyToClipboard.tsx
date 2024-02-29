import { useState } from "react";

import { isMobile } from "./isMobile";

export const useCopyToClipboard = ({
  time,
  turns,
  mode,
}: {
  time: string;
  turns: string;
  mode: "Daily" | "Classic" | "Lite";
}) => {
  const [copySuccess, setCopySuccess] = useState("Share results");

  const copyToClipboard = async () => {
    try {
      const gameInfo = `26 Pairs ${mode} Shuffle shuffle 🎲
    ⏱️ ${time}
    🃏 ${turns} moves

    Try and beat it: 26pairs.com`;

      await navigator.clipboard.writeText(gameInfo);
      if (isMobile()) await navigator.share({ text: gameInfo });
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
