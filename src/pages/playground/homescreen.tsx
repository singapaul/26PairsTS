import React from "react";
import { FactContainer } from "@/components/composed/FactContainer";
import { Hero } from "@/components/composed/Hero";
 
type Props = {};

const homescreen = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center text-center h-screen gap-4">
      <Hero />
      <FactContainer />
    </div>
  );
};

export default homescreen;
