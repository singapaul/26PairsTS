import React, { useState, useEffect } from "react";
import { Board } from "@/components/composed/Game/Board";
import { CLASSICDECKLITE } from "@/assets/data";
import { DAILY_SHUFFLE } from "@/settings";
import { ModalRegistry } from "@/components/Modals";
import { assignIDToCards, reorderArrayAccordingToOrderArray } from "@/utils";

const DailyShuffle = ({ path }: { path: string }) => {


  const [duplicatedCards, setDuplicatedCards] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://alpha-gules.vercel.app/api/getShuffle",
          {
            method: "GET", // or 'POST' or other HTTP methods if applicable
            headers: {
              "Content-Type": "application/json", 
            },
          }
        );

        // const response = await fetch(
        //   'https://alpha-gules.vercel.app/getShuffle',
        // )
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const orderedArray = reorderArrayAccordingToOrderArray(CLASSICDECKLITE, result.body[0].lite);
        const IDArray = assignIDToCards(orderedArray);
        setDuplicatedCards(IDArray);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Board duplicatedCards={duplicatedCards} gameDifficulty={DAILY_SHUFFLE} />
      <ModalRegistry />
    </>
  );
};

export default DailyShuffle;
