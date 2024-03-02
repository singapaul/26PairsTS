export const formatSecondsToMMSS = (seconds: number | string): string => {
  if (typeof seconds === "string") return "-";

  const minutes: number = Math.floor(seconds / 60);
  const remainingSeconds: number = seconds % 60;

  // Pad the minutes and seconds with leading zeros if they are less than 10
  const paddedMinutes: string = minutes.toString().padStart(2, "0");
  const paddedSeconds: string = remainingSeconds.toString().padStart(2, "0");

  return `${paddedMinutes}:${paddedSeconds}`;
};
