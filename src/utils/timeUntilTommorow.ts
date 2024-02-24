import { startOfTomorrow } from "date-fns";

// This function returns the number of milliseconds until the start of tomorrow.
export const timeUntilTomorrow = (): number => {
  const currentTime = new Date();
  const startOfNextDay = startOfTomorrow();
  // Subtracting the current time from the start of next day gives us the difference in milliseconds
  const differenceInMillis = startOfNextDay.getTime() - currentTime.getTime();
  
  return differenceInMillis;
};
