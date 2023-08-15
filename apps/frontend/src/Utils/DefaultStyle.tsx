import { createStyles, keyframes } from '@mantine/core';

export const BACKGROUND_COLOR = '#F1D8F8';
export const PURPLE_INTENSE = '#9933CC';
export const GREEN_LIGHT = '#72ff9c';
export const GREEN_WHITE = '#D4FFE1';
export const WHITE = '#ffffff';
export const BLACK = '#ffffff';

export const SHADOW = '0px 4px 12px rgba(0, 0, 0, 0.1)';

export const entranceAnimation = (delay: number) =>
  `${keyframes({
    '0%': { opacity: 0, transform: 'translateY(100px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  })} 0.5s ${delay}s both`;

export const entranceClass = (delay: number) => {
  const entranceStyle = createStyles((theme, { delay }: { delay: number }) => ({
    anime: { animation: entranceAnimation(delay) },
  }));
  return entranceStyle({ delay }).classes.anime;
};
