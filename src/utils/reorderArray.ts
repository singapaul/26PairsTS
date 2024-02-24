// @ts-ignore
export function reorderArray(originalArray, orderArray) {
    // Combine the original array and the order array into a single array of objects
    // @ts-ignore
    const combinedArray = originalArray.map((item, index) => ({ item, order: orderArray[index] }));

    // Sort the combined array based on the order property
    // @ts-ignore
    combinedArray.sort((a, b) => a.order - b.order);
  
    // Extract the original items from the sorted array
    // @ts-ignore
    const reorderedArray = combinedArray.map(({ item }) => item);
  
    return reorderedArray;
  }
  

  