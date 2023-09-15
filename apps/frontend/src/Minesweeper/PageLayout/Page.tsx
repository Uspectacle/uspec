import { createStyles } from '@mantine/core';
import React from 'react';
import { MINESWEEPER_MAIN } from '../MinesweeperStyle';

export const Page = ({ title, text }: { title: string; text: string }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      <div className={classes.text}>{text}</div>
    </div>
  );
};

const useStyles = createStyles(() => ({
  container: {
    color: MINESWEEPER_MAIN,
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '3em',
  },
  text: { paddingTop: '1em' },
}));
