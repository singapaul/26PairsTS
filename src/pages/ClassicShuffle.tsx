import React from "react";

import { CLASSICDECK } from "@/assets/data";
import { Board } from "@/components/composed/Game/Board";
import { ModalRegistry } from "@/components/Modals";
import { CLASSIC_SHUFFLE} from "@/settings";
import { assignIDToCards, shuffleArray } from "@/utils";
 
const ClassicShuffle = ({ path }: { path: string }) => {
  const shuffledArray = shuffleArray(CLASSICDECK)
  const IDArray = assignIDToCards(shuffledArray)
  return (
    <>
      <Board duplicatedCards={IDArray} gameDifficulty={CLASSIC_SHUFFLE} />
      <ModalRegistry />
    </>
  );
};

export default ClassicShuffle;

export function Head() {
  return (
    <>
      <meta property="og:title" content="26Pairs" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.26pairs.com" />
      <meta
        property="og:image"
        content="https://www.26pairs.com/images/OpenGraph"
      />
      <meta
        property="og:description"
        content="Join the fun and challenge your memory with 26Pairs, the ultimate card matching game!"
      />

      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:creator" content="@YourTwitterHandle" /> */}
      <meta name="twitter:title" content="26Pairs" />
      <meta
        name="twitter:description"
        content="Join the fun and challenge your memory with 26Pairs, the ultimate card matching game!"
      />
      <meta
        name="twitter:image"
        content="https://www.26pairs.com/og-image.jpg"
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WVXZRW28SC"
      ></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WVXZRW28SC')`}
        ;
      </script>
    </>
  );
}