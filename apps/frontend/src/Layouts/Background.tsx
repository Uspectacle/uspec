import React, { useEffect, useState } from 'react';
import { createStyles } from '@mantine/core';
import { BACKGROUND_COLOR } from '../Utils/DefaultStyle';
import { RandomCircle } from './RandomCircle';
import { MINESWEEPER_BACKGROUND } from '../Minesweeper/MinesweeperStyle';

export const Background = ({
  length,
  tag,
}: {
  length: number;
  tag?: string | undefined;
}) => {
  const { classes } = useStyles();

  const [circles, setCircles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setCircles(
      Array.from({ length }, (_, index) => <RandomCircle key={index} />)
    );
  }, [length]);

  return <div className={`${classes.container}  ${tag ?? ''}`}>{circles}</div>;
};

const useStyles = createStyles(() => ({
  container: {
    zIndex: -1,
    position: 'fixed',
    width: '100%',
    height: '100%',
    transition: 'background 0.5s',
    backgroundColor: BACKGROUND_COLOR,
    overflow: 'hidden',
    '&.minesweeper': { backgroundColor: MINESWEEPER_BACKGROUND },
  },
}));
