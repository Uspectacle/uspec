import React from 'react';
import { createStyles, keyframes } from '@mantine/core';
import { PURPLE_INTENSE } from '../../utils/DefaultStyle';

export const RandomCircle = () => {
  const { classes } = useStyles();

  return <div className={classes.circle} />;
};

const randomState = () => ({
  transform: `scale(${1 + Math.random() / 3}) translate(${
    Math.random() * 100
  }vw, ${Math.random() * 100}vh)`,
  opacity: Math.random() / 3,
});

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
    backgroundColor: PURPLE_INTENSE,
    borderRadius: '50%',
    aspectRatio: '1',
  },
}));
