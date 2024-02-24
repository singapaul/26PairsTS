import React from "react";
import { FactContainer } from "@/components/composed/FactContainer";
import { Hero } from "@/components/composed/Hero";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import Status from "@/components/Status";
 

const Homescreen = ({ path }: { path: string }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center h-screen gap-4">
      <Status/>
      <ThemeToggle />
      <Hero />
      <FactContainer />
    </div>
  );
};

export default Homescreen;
