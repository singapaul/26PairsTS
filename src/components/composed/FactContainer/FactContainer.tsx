import React from "react";

type Props = {};

export const FactContainer = (props: Props) => {
  return (
    <div className="rounded-lg flex flex-col items-center p-3 text-lg max-w-72 bg-accent">
      <p className="text-md  font-semibold">{"Fact of the Day: 29/01/2024"}</p>
      <p className="text-sm">
        {
          "The 'tip-of-the-tongue' phenomenon occurs when you feel like you're about to remember something but can't quite recall it."
        }
      </p>
    </div>
  );
};
