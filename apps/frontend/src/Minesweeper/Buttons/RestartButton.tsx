import React from 'react';
import { useDispatch } from 'react-redux';
import useMinesweeperState from '../Store/useMinesweeperState';
import { restart } from '../Store/minesweeperStateStore';
import { useMinesweeperStyles } from '../MinesweeperStyle';

export const RestartButton = () => {
  const dispatch = useDispatch();
  const { isOver } = useMinesweeperState().current;
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
