import { keyframes } from '@emotion/react';
import { createStyles } from '@mantine/emotion';
import { MAIN_COLOR } from '../Utils/DefaultStyle';

export const RandomCircle = () => {
  const { classes } = useStyles();
  return <div className={classes.circle} />;
};
const color = MAIN_COLOR;
const randomState = () => {
  const scaleSeed = Math.random();
  return {
    transform: `scale(${1 + scaleSeed / 3}) translate(${
      Math.random() * 120 - 10
    }vw, ${Math.random() * 120 - 10}vh)`,
    opacity: scaleSeed / 3,
    boxShadow: `0px 0px ${6 - scaleSeed * 5}px ${scaleSeed * 5}px ${color}`,
  };
};

const randomKeyframes = () => {
  const DefaultState = randomState();
  return keyframes({
    '0%': DefaultState,
    '25%': randomState(),
    '50%': randomState(),
    '75%': randomState(),
    '100%': DefaultState,
  });
};

const useStyles = createStyles(() => ({
  circle: {
    animation: `${randomKeyframes()} ${
      Math.random() * 100 + 200
    }s cubic-bezier(0.4, 0.1, 0.7, 1) infinite`,
    width: Math.random() * 200,
    position: 'fixed',
    borderRadius: '50%',
    aspectRatio: '1',
    mixBlendMode: 'color-burn',
    backgroundColor: color,
  },
}));
