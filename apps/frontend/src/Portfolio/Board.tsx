import { createStyles } from '@mantine/core';
import React from 'react';
import { SHADOW, entranceAnimation } from '../Utils/DefaultStyle';

export const Board = ({ children }: { children?: JSX.Element | undefined }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.frame}>
      <div className={classes.board}>{children}</div>
    </div>
  );
};

const useStyles = createStyles(() => ({
  frame: {
    maxWidth: 1000,
    margin: 10,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    animation: entranceAnimation(0.1),
    backgroundColor: '#cfa06a',
    backgroundImage: 'url(/image/wood-texture.jpg)',
    backgroundSize: 400,
    boxShadow: `${SHADOW}, inset 0px 0px 3px 15px #ffe48a38, inset 1px 2px 5px 5px #9414a59c`,
    borderRadius: 3,
  },
  board: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#602409',
    backgroundImage: 'url(/image/board-texture.jpg)',
    backgroundSize: 350,
    boxShadow: 'inset 2px 4px 10px rgba(0, 0, 0, 0.3)',
    borderRadius: 3,
  },
}));
