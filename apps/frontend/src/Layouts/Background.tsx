import React from 'react';
import { createStyles, keyframes } from '@mantine/core';
import {
  BACKGROUND_COLOR,
  PURPLE_INTENSE,
} from 'apps/frontend/utils/DefaultStyle';

export const Background = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      {Array.from({ length: 20 }, (_, index) => (
        <div key={index} className={randomClass()} />
      ))}
    </div>
  );
};

const randomState = () => {
  return {
    transform: `scale(${1 + Math.random() / 3}) translate(${
      Math.random() * 100
    }vw, ${Math.random() * 100}vh)`,
    opacity: Math.random() / 3,
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

const randomClass = () => {
  const randomStyle = createStyles(() => ({
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
  return randomStyle().classes.circle;
};

const useStyles = createStyles(() => ({
  container: {
    zIndex: -1,
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundColor: BACKGROUND_COLOR,
    overflow: 'hidden',
  },
}));
