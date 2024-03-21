import React from "react";
import { navigate } from "gatsby";

import card from "@/assets/images/card_back.png";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const handleClick = () => {
    navigate('/')
  };

  return (
    <div className="flex flex-col items-center text-center h-screen pb-6">
      <div className="flex flex-grow flex-col justify-center items-center gap-4">
        <div>
          <img src={card} alt="logo card" className="max-h-32" />
        </div>
        <h1 className="text-xl font-bold">
          Oh no! You've hit the 404 not found page!
        </h1>
        <Button
          size={"lg"}
          variant='secondary'
          onClick={handleClick}
          className="w-full"
        >
          Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
