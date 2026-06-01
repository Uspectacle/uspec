export const randomize = (seed?: number | undefined) =>
  (Math.PI * ((seed ?? Math.random()) + Math.E)) % 1;

export const randomPop = <T,>(array: T[], seed?: number | undefined): T => {
  return array[Math.floor(randomize(seed) * array.length)];
};

export const randomShuffle = <T,>(
  array: T[],
  seed?: number | undefined,
): T[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(randomize(randomize(seed) + i) * array.length);
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
