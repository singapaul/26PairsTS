import React from "react";
// @ts-ignore
import card from "@/assets/images/card_back.png";
import { Button } from "@/components/ui/button";
type Props = {};

export const Hero = (props: Props) => {
  return (
    <>
      <div>
        <img src={card} alt="logo card" className="max-h-32" />
      </div>
      <h1 className="text-2xl">Welcome to 26 pairs</h1>
      <p className="max-w-128 px-3">
        26 Pairs is a simple card game designed to test your memory and speed.
        Flip 2 cards at a time to find a pair, and keep going until you've
        flipped the entire deck.
      </p>
      <h2 className="text-lg font-semibold">Select Your Challenge</h2>
      <div className="flex flex-col items-center sm:flex-row gap-2">
        <Button size={"lg"}>Daily Shuffle</Button>
        <Button size={"lg"} variant={"outline"}>
          Other game modes
        </Button>
        <Button size={"lg"} variant={"outline"}>
          Sign Up/Login
        </Button>
      </div>
    </>
  );
};
