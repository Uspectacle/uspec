import { createStyles } from '@mantine/core';
import React from 'react';
import { WHITE, SHADOW } from '../Utils/DefaultStyle';

export const MinesweeperLayout = ({
  focus,
  setFocus,
}: {
  focus: boolean;
  setFocus: (focus: boolean) => void;
}) => {
  const { classes } = useStyles();
  return (
    <div
      className={classes.container}
      style={!focus ? { opacity: 0, zIndex: -1 } : {}}
    >
      <div className={classes.exit} onClick={() => setFocus(false)}>
        exit
      </div>
    </div>
  );
};

const useStyles = createStyles(() => ({
  title: { fontSize: '3em' },
  exit: { padding: 100, background: WHITE, borderRadius: 20 },
  container: {
    position: 'absolute',
    zIndex: 1,
    minWidth: '100%',
    minHeight: '100dvh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    transition: 'opacity 0.3s, padding 0.3s, margin 0.3s',
  },
  navigation: {},
  back: {},
  next: {},
  gameContainer: {},
  settings: {},
  setSize: {},
  setDifficulty: {},
  actions: {},
  restart: {},
}));
