export const reorderArrayAccordingToOrderArray = (
    originalArray: { cards: any[] },
    orderArray: { [x: string]: any }
  ) => {
    // Combine the original array and the order array into a single array of objects
    const combinedArray = originalArray.cards.map(
      (item: any, index: string | number) => ({
        item,
        order: orderArray[index],
      })
    );
    // Sort the combined array based on the order property
    combinedArray.sort(
      (a: { order: number }, b: { order: number }) => a.order - b.order
    );
    // Extract the original items from the sorted array
    const reorderedArray = combinedArray.map(({ item }) => item);
    return reorderedArray;
  };