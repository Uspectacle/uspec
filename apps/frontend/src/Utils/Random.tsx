export const randomize = (seed?: number | undefined) =>
  (Math.PI * ((seed ?? Math.random()) + Math.E)) % 1;

export const randomPop = <T,>(array: T[], seed?: number | undefined): T => {
  return array[Math.floor(randomize(seed) * array.length)];
};
