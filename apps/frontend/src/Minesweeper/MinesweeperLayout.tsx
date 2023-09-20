import { createStyles } from '@mantine/core';
import React from 'react';
import { ZoomAndDrag } from './ZoomAndDrag';
import { Game } from './Game/Game';
import { ConfettiControl } from './ConfettiControl';
import { Menu } from './Menu';

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
      <Menu setFocus={setFocus} />
      <ConfettiControl active={true} />
      <ZoomAndDrag>
        <Game showProb={false} randomPlay={false} autoPlayTime={null} />
      </ZoomAndDrag>
    </div>
  );
};

const useStyles = createStyles(() => ({
  container: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    transition: 'opacity 0.5s, padding 0.5s, margin 0.5s',
  },
  main: {
    height: 1000,
    width: 1000,
    overflow: 'hidden',
  },
}));
