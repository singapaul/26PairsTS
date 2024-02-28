import React from "react";
import card from "@/assets/images/card_back.png";
import { Button } from "@/components/ui/button";
import { useAuthValue } from "@/components/Auth/AuthContext";
import { navigate } from "gatsby";
import { useNavigateToDailyShuffle } from "@/routes/route_hooks";
// import { DialogTrigger } from "@/components/ui/dialog";
// import { GameModesDialog } from "../GameModesDialog";
import { useAppDispatch } from "@/store/hooks";
import { setModalConfig } from "@/store/slices/modals";
import { IoIosSettings } from "react-icons/io";
import { TiArrowShuffle } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
type Props = {};

export const Hero = (props: Props) => {

  const dispatch = useAppDispatch()
  const { currentUser } = useAuthValue();
  const [navigateToDailyShuffle] = useNavigateToDailyShuffle();

  const handleLogin = () => {
    navigate("/app/login");
  };

  const handleProfile = () => {
    navigate("/app/profile");
  };

  const DynamicButton = !currentUser ? (
    <Button size={"lg"} variant={"outline"} onClick={handleLogin} className="w-full">
      <span className="flex items-center w-full justify-between text-lg gap-4">
        <p> Sign up / Login </p>
        <p className="text-2xl">
          <FaUser />
        </p>
      </span>
    </Button>
  ) : (
    <Button size={"lg"} variant={"outline"} onClick={handleProfile} className="w-full">
   
      <span className="flex items-center w-full justify-between text-lg gap-4">
        <p> Profile </p>
        <p className="text-2xl">
          <FaUser />
        </p>
      </span>
    </Button>
  );

  return (
    <>
      {/* <GameModesDialog> */}
        <div>
          <img src={card} alt="logo card" className="max-h-32" />
        </div>
        <h1 className="text-2xl">Welcome to 26 pairs</h1>
        <p className="max-w-96 px-3">
          26 Pairs is a simple card game designed to test your memory and speed.
          Flip 2 cards at a time to find a pair, and keep going until you've
          flipped the entire deck.
        </p>
        <h2 className="text-lg font-semibold">Select Your Challenge</h2>
        <div className="flex flex-col items-center sm:flex-row gap-2">
          <Button size={"lg"} onClick={navigateToDailyShuffle} className="w-full">
            <span className="flex items-center w-full justify-between text-lg gap-4">
              <p>Daily Shuffle</p>
              <p className="text-2xl">
                <TiArrowShuffle />
              </p>
            </span>
          </Button>

          {/* <DialogTrigger asChild> */}
            <Button size={"lg"} variant={"outline"} className="w-full" onClick={()=> dispatch(setModalConfig({
              id: 'gameModes',
              isOpen: true,
            }))}>
              <span className="flex items-center w-full justify-between text-lg gap-4">
                <p> Other game modes </p>
                <p className="text-2xl">
                  <IoIosSettings />
                </p>
              </span>
            </Button>
          {/* </DialogTrigger> */}
          {DynamicButton}
        </div>
      {/* </GameModesDialog> */}
    </>
  );
};
