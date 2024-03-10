// https://flaviocopes.com/how-to-shuffle-array-javascript/

// @ts-ignore
export const shuffleArray = (
    originalArray: { cards: any[] },
    orderArray?: { [x: string]: any }
  ) => {
    if (orderArray) {
      // Combine the original array and the order array into a single array of objects
      const combinedArray = originalArray.cards.map((item: any, index: number) => ({
        item,
        order: orderArray[index],
      }));
      // Sort the combined array based on the order property
      combinedArray.sort((a: { order: number }, b: { order: number }) => a.order - b.order);
      // Extract the original items from the sorted array
      const reorderedArray = combinedArray.map(({ item }) => item);
      return reorderedArray;
    } else {
      // Shuffle the cards randomly if no orderArray is provided
      const array = originalArray.cards.slice();
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
      return array;
    }
  };
  