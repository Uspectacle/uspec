import { createStyles } from '@mantine/core';
import React from 'react';
import { SHADOW } from '../Utils/DefaultStyle';
import { MINESWEEPER_BACKGROUND, MINESWEEPER_MAIN } from './MinesweeperStyle';

export const Title = ({
  focus,
  setFocus,
}: {
  focus: boolean;
  setFocus: (focus: boolean) => void;
}) => {
  const { classes } = useStyles();
  return (
    <div
      className={classes.titleContainer}
      style={focus ? { opacity: 0 } : {}}
      onClick={() => setFocus(true)}
    >
      <div className={classes.title}>How To Sweep Mines</div>
      <div className={classes.text}>Click to begin the presentation</div>
    </div>
  );
};

const useStyles = createStyles(() => ({
  titleContainer: {
    backgroundColor: MINESWEEPER_BACKGROUND,
    color: MINESWEEPER_MAIN,
    borderRadius: 10,
    padding: 10,
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'wrap',
    boxShadow: SHADOW,
    transition: 'opacity 0.5s, padding 0.5s, margin 0.5s',
    opacity: 1,
    cursor: 'pointer',
    '&:hover': {
      padding: 20,
      margin: 10,
    },
    '&:active': {
      padding: 30,
      margin: 0,
      boxShadow: 'none',
    },
  },
  title: { fontSize: '3em', padding: 10 },
  text: { padding: 10 },
}));
