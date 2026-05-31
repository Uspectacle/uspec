export const clamp = (x: number, min: number, max: number) =>
  x < min ? min : x > max ? max : x;

export const clampToBounds = (
  { x, y }: { x: number; y: number },
  {
    top,
    left,
    right,
    bottom,
  }: {
    top: number;
    left: number;
    right: number;
    bottom: number;
  }
) => ({
  x: clamp(x, left, right),
  y: clamp(y, top, bottom),
});
