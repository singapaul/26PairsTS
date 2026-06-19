// Returns the number of milliseconds until the next UTC midnight, when the
// daily puzzle rolls over for everyone simultaneously.
export const timeUntilTomorrow = (): number => {
  const now = new Date();
  const nextUtcMidnight = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate() + 1
  );

  return nextUtcMidnight - now.getTime();
};
