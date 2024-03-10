export const formatSecondsToMMSS = (seconds: number | string): string => {
  if (typeof seconds === "string") {
    if (seconds === '0') return "-";
    // Convert string to number
    seconds = Number(seconds);
  }
  
  const minutes: number = Math.floor(seconds / 60);
  const remainingSeconds: number = seconds % 60;
  if(Number.isNaN(minutes) || Number.isNaN(remainingSeconds) ){
    return '-'
  }
  // Pad the minutes and seconds with leading zeros if they are less than 10
  const paddedMinutes: string = minutes.toString().padStart(2, "0");
  const paddedSeconds: string = remainingSeconds.toString().padStart(2, "0");

  return `${paddedMinutes}:${paddedSeconds}`;
};
