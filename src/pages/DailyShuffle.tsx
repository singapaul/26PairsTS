import React, { useEffect } from "react";

import { Board } from "@/components/composed/Game/Board";
import { ModalRegistry } from "@/components/Modals";
import { useFetchShuffledCards } from "@/hooks";
import { DAILY_SHUFFLE } from "@/settings";
import { useAppDispatch } from "@/store/hooks";
import { setDifficulty } from "@/store/slices/difficulty";
import { setIsLoading, setIsNotLoading } from "@/store/slices/loading";
const DailyShuffle = ({ path }: { path: string }) => {
  const { duplicatedCards, isLoading } = useFetchShuffledCards();
  const dispatch = useAppDispatch();
 
  dispatch(setDifficulty('DAILY_SHUFFLE'))
  useEffect(() => {
    if (isLoading) {
      dispatch(setIsLoading());
    } else {
      dispatch(setIsNotLoading());
    }
  }, [dispatch, isLoading]);

  return (
    <>
      <Board duplicatedCards={duplicatedCards} gameDifficulty={DAILY_SHUFFLE} />
      <ModalRegistry />
    </>
  );
};

export default DailyShuffle;

export function Head() {
  return (
    <>
      <title>Daily Shuffle | 26Pairs</title>
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
