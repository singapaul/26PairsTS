export const getCurrentDate = () => {
  const currentDate = new Date();

  // Use UTC components so the date matches the UTC-based daily puzzle.
  const day = String(currentDate.getUTCDate()).padStart(2, "0");
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = currentDate.getUTCFullYear();

  return `${day}/${month}/${year}`;
};
