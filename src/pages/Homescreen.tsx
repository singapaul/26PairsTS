import React from "react";

import { FactContainer } from "@/components/composed/FactContainer";
import { Hero } from "@/components/composed/Hero";
import { ModalRegistry } from "@/components/Modals";
// import Status from "@/components/Status";
 

const Homescreen = ({ path }: { path: string }) => {
  return (
    <div className="flex flex-col items-center text-center h-screen pb-6">
    <div className="flex flex-grow flex-col justify-center items-center gap-4">
      <Hero />
    </div>
    <FactContainer />
    <ModalRegistry/>
  </div>
  
  );
};

export default Homescreen;
