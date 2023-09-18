import { createStyles } from '@mantine/core';
import React from 'react';
import { ConfettiControl } from './ConfettiControl';

export const MinesweeperLayout = ({
  focus, // setFocus,
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
      <ConfettiControl active={true} />
      <div
        className={classes.menuContainer}
        style={!focus ? { opacity: 0, transform: 'translateX(-100%)' } : {}}
      >
        <div className={classes.button}></div>
        <div className={classes.button}></div>
        <div className={classes.button}></div>
        <div className={classes.button}></div>
        <div className={classes.button}></div>
      </div>
      <div
        className={classes.gameContainer}
        style={!focus ? { opacity: 0, transform: 'translateX(100%)' } : {}}
      >
        <div className={classes.gameDiv}>
          <div className={classes.game} />
        </div>
      </div>
    </div>
  );
};

const useStyles = createStyles(() => ({
  container: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100dvh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    transition: 'opacity 0.5s, padding 0.5s, margin 0.5s',
  },
  menuContainer: {
    height: '100%',
    backgroundColor: '#cdf00460',
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'stretch',
    gap: 10,
    boxSizing: 'border-box',
    overflow: 'hidden',
    transition: 'opacity 0.5s, transform 0.5s',
    transitionDelay: '0.5s',
  },
  gameContainer: {
    overflow: 'hidden',
    backgroundColor: '#2f04f049',
    height: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    transition: 'opacity 0.5s, transform 0.5s',
    transitionDelay: '0.5s',
  },
  button: {
    backgroundColor: '#f0040460',
    width: '100%',
    height: 40,
  },
  gameDiv: {
    aspectRatio: '1',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  game: {
    aspectRatio: '1',
    height: '100%',
    backgroundColor: '#04f010ff',
  },
}));
