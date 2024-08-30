import React from "react";

import { Board } from "@/components/composed/Game/Board";
import { ModalRegistry } from "@/components/Modals";
import { useFetchLocalCardsLite } from "@/hooks";
import { LITE_SHUFFLE } from "@/settings";
import { useAppDispatch } from "@/store/hooks";
import { setDifficulty } from "@/store/slices/difficulty";
 
const LiteShuffle = ({ path }: { path: string }) => {
 
  const {duplicatedCards} = useFetchLocalCardsLite()
  const dispatch = useAppDispatch( )
  dispatch(setDifficulty('LITE_SHUFFLE'))
 
  return (
    <>
      <Board duplicatedCards={duplicatedCards} gameDifficulty={LITE_SHUFFLE} />
      <ModalRegistry />
    </>
  );
};

export default LiteShuffle;

export function Head() {
  return (
    <>
      <title>Lite Shuffle | 26Pairs</title>
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
