import { useEffect,useState } from 'react';

import { CLASSICDECKLITE } from '@/assets/data';
import { assignIDToCards, reorderArrayAccordingToOrderArray } from '@/utils';

// Custom hook for fetching and processing data
export const useFetchShuffledCards = () => {
  const [duplicatedCards, setDuplicatedCards] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://alpha-gules.vercel.app/api/getShuffle",
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
        const orderedArray = reorderArrayAccordingToOrderArray(CLASSICDECKLITE, result.body[0].lite);
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

  return { duplicatedCards, isLoading, error };
}

 
