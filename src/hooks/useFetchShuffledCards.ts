import { useEffect,useState } from 'react';

import { CLASSICDECKLITE } from '@/assets/data';
import { assignIDToCards, reorderArrayAccordingToOrderArray } from '@/utils';

// Custom hook for fetching and processing data
export const useFetchShuffledCards = () => {
  const [duplicatedCards, setDuplicatedCards] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [gameID, setGameId] = useState<number>(0)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://getdailyshuffle-mpknwhehla-uc.a.run.app/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
 
 
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        const { entryNumber, lite } = result
        setGameId(entryNumber)
        const orderedArray = reorderArrayAccordingToOrderArray(CLASSICDECKLITE, lite);
        const IDArray = assignIDToCards(orderedArray);
        setDuplicatedCards(IDArray);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); 

  return { duplicatedCards, isLoading, error, gameID };
}

 
