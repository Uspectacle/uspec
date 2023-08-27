import React from 'react';
import { useDispatch } from 'react-redux';
import useGameState from './useGameState';
import { restart } from './gameStateStore';
import { useMinesweeperStyles } from './MinesweeperStyle';

export const RestartButton = () => {
  const dispatch = useDispatch();
  const { isOver } = useGameState();
  const { classes } = useMinesweeperStyles();
  return (
    <div
      className={`${classes.button} ${isOver && 'blink'}`}
      onClick={() => dispatch(restart())}
    >
      Restart
    </div>
  );
};
