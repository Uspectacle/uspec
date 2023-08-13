import React from 'react';
import { createStyles } from '@mantine/core';
import { BACKGROUND_COLOR } from '../../utils/DefaultStyle';
import { RandomCircle } from './RandomCircle';

export const Background = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      {Array.from({ length: 20 }, (_, index) => (
        <RandomCircle key={index} />
      ))}
    </div>
  );
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
