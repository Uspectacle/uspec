export const mulberry32 = (seed: number) => {
  let a = seed * 1000;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    var t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

export const pick = <T,>(array: T[], seed?: number): T => {
  const random = seed ? mulberry32(seed) : Math.random;

  return array[Math.floor(random() * array.length)];
};

export const shuffle = <T,>(array: T[], seed?: number): T[] => {
  const random = seed ? mulberry32(seed) : Math.random;
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};
