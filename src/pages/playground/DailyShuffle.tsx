
import React, { useState, useEffect } from "react";
// goal 1 get base game running and cards flipping
//      a) Add redux
import {Header} from "@/components/composed/Game/Header";
import { Board } from "@/components/composed/Game/Board";
import { nanoid } from "nanoid";
import { CLASSICDECKLITE } from "@/assets/data";
import styled from "styled-components";
import Card from "@/components/composed/Game/Board/Card/Card";
const DailyShuffle = () => {

    const [flip, setFlip] = useState(false)


    const handleFlip = () => {
        setFlip(!flip)
    }
const  x = CLASSICDECKLITE.cards[0].src
    const BoardContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
    `

    const [duplicatedCards, setDuplicatedCards] = useState<any>([])

    const duplicateCards = (cards: any[]) => {
        return cards.map((card: any) => ({
          ...card,
          id: nanoid(),
        }))
      }

    const reorderArray = (originalArray: { cards: any[]; }, orderArray: { [x: string]: any; })=> {
        // Combine the original array and the order array into a single array of objects
        const combinedArray = originalArray.cards.map((item: any, index: string | number) => ({
          item,
          order: orderArray[index],
        }))
        // Sort the combined array based on the order property
        combinedArray.sort((a: { order: number; }, b: { order: number; }) => a.order - b.order)
        // Extract the original items from the sorted array
        const reorderedArray = combinedArray.map(({ item }) => item)
        return reorderedArray
      }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              'https://alpha-gules.vercel.app/api/getShuffle',
              {
                method: 'GET', // or 'POST' or other HTTP methods if applicable
                headers: {
                  'Content-Type': 'application/json', // Adjust the content type if necessary
                  // Add any other headers as needed (e.g., authorization headers, API keys)
                },
              },
            )
    
            // const response = await fetch(
            //   'https://alpha-gules.vercel.app/getShuffle',
            // )
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            const result = await response.json()
            // setData(result.body[0].lite)
            const orderedArray = reorderArray(CLASSICDECKLITE, result.body[0].lite)
            const IDArray = duplicateCards(orderedArray)
            // note the duplicate cards function does not duplicate the cards, it ids them
            setDuplicatedCards(IDArray)
          } catch (error) {
           console.log(error)
          }
        }
        fetchData()
      }, [])

  return (
  
      <>
      <BoardContainer>
      <Board duplicatedCards={duplicatedCards} gameDifficulty={'dailyShuffle'} />
      </BoardContainer>
      </>

  );
};

export default DailyShuffle;
