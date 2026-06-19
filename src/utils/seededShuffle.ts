// mulberry32: a tiny, fast, deterministic PRNG seeded from a single integer.
const mulberry32 = (seed: number) => {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

// Fisher-Yates shuffle drawing from a seeded PRNG, so the same seed always
// produces the same ordering.
export const seededShuffle = (
  originalArray: { cards: any[] },
  seed: number
) => {
  const rand = mulberry32(seed);
  const array = originalArray.cards.slice();
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};
