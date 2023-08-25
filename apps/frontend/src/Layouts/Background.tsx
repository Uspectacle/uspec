import React, { useEffect, useState } from 'react';
import { createStyles } from '@mantine/core';
import { BACKGROUND_COLOR } from '../Utils/DefaultStyle';
import { RandomCircle } from './RandomCircle';

export const Background = ({ length }: { length: number }) => {
  const { classes } = useStyles();

  const [circles, setCircles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setCircles(
      Array.from({ length }, (_, index) => <RandomCircle key={index} />)
    );
  }, [length]);

  return <div className={classes.container}>{circles}</div>;
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
