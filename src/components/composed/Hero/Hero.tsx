import React from "react";
// @ts-ignore
import card from "@/assets/images/card_back.png";
import { Button } from "@/components/ui/button";
import { useAuthValue } from "@/components/Auth/AuthContext";
import { navigate } from "gatsby";
 
import {
  DialogTrigger,
} from "@/components/ui/dialog"
import { GameModesDialog } from "../GameModesDialog";
 
type Props = {};

export const Hero = (props: Props) => {
  const { currentUser } = useAuthValue();


  const handleLogin = () => {
    navigate('/app/login')
  }

  const handleProfile = () => {
    navigate('/app/profile')
  }

  const DynamicButton = !currentUser ? (
    <Button size={"lg"} variant={"outline"} onClick={handleLogin}>
      Sign Up/Login
    </Button>
  ) : (
    <Button size={"lg"} variant={"outline"} onClick={handleProfile}>
      Profile
    </Button>
  );

  return (
    <>
     <GameModesDialog>
      <div>
        <img src={card} alt="logo card" className="max-h-64" />
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
 
        <DialogTrigger asChild>
        <Button size={"lg"} variant={"outline"}>
          Other game modes
        </Button>
      </DialogTrigger>
        {DynamicButton}
      </div>

 
      </GameModesDialog>
    </>
  );
};
