import React from "react";
import { getCurrentDate } from "@/utils";
import { getFact } from "@/utils";

export const FactContainer = () => {
  return (
    <div className="rounded-lg flex flex-col items-center p-3 text-lg max-w-72 sm:max-w-96 bg-accent">
      <p className="text-sm sm:text-lg font-bold">{`Fact of the Day: ${getCurrentDate()}`}</p>
      <p className="text-sm sm:text-base">{getFact()}</p>
    </div>
  );
};
