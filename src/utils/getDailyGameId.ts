const EPOCH_UTC = Date.UTC(2024, 0, 1); // 2024-01-01

// Returns a deterministic game number: whole UTC days since the epoch (+1).
// Used both as the shuffle seed and the "Daily Shuffle #N" share number, so
// every player on the same UTC day gets the same value.
export const getDailyGameId = (date: Date = new Date()): number => {
  const todayUtc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  );
  return Math.floor((todayUtc - EPOCH_UTC) / 86_400_000) + 1;
};
