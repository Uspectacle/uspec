import { createStyles } from '@mantine/core';
import React from 'react';
import { MINESWEEPER_MAIN } from './MinesweeperStyle';

export const Page = ({
  title,
  text,
  active,
}: {
  title: string;
  text: string;
  active: boolean;
}) => {
  const { classes } = useStyles();

  return (
    <div className={`${classes.container} ${active && 'active'}`}>
      <div className={`${classes.title} ${active && 'active'}`}>{title}</div>
      <div className={`${classes.text} ${active && 'active'}`}>{text}</div>
    </div>
  );
};

const useStyles = createStyles(() => ({
  container: {
    color: MINESWEEPER_MAIN,
    overflow: 'hidden',
    // transition: 'transform 0.1s',
    position: 'relative',
    // transform: 'scaleY(0)',
    '&.active': { top: 0 },
  },
  title: {
    fontSize: '3em',
    // opacity: 0,
    // overflow: 'hidden',
    // transition: 'opacity 0.3s',
    // '&.active': { opacity: 1 },
  },
  text: {
    // opacity: 0,
    // overflow: 'hidden',
    // transition: 'opacity 0.3s',
    // '&.active': { opacity: 1 },
  },
}));
