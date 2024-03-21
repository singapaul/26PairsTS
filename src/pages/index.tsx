import React, { useEffect } from "react";

import { FactContainer } from "@/components/composed/FactContainer";
import { Hero } from "@/components/composed/Hero";
import { ModalRegistry } from "@/components/Modals";
import { useAppDispatch } from "@/store/hooks";
import { resetModalConfig } from "@/store/slices/modals";
// import Status from "@/components/Status";

const Homescreen = ({ path }: { path: string }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(resetModalConfig());
  }, []);

  return (
    <div className="flex flex-col items-center text-center h-screen pb-6">
      <div className="flex flex-grow flex-col justify-center items-center gap-4">
        <Hero />
      </div>
      <FactContainer />
      <ModalRegistry />
    </div>
  );
};

export default Homescreen;

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
    </>
  );
}
