import { createStyles } from '@mantine/core';
import React from 'react';
import { MINESWEEPER_MAIN } from './MinesweeperStyle';
import { Game } from './Game';

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
      <div className={classes.leftContainer}>
        <div className={classes.exit} onClick={() => setFocus(false)}>
          exit
        </div>
        <div className={classes.textContainer}>
          <div className={classes.title}>What Is Minesweeper</div>
          <div className={classes.text}>
            it's a game duh here are the rules. try playing some games :
          </div>
        </div>
        <div className={classes.navigation}>
          <div className={classes.back}>back</div>
          <div className={classes.next}>next</div>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.settings}>
          <div className={classes.setSize}>setSize</div>
          <div className={classes.setDifficulty}>setDifficulty</div>
        </div>
        <Game />
        <div className={classes.actions}>
          <div className={classes.restart}>restart</div>
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
    transition: 'opacity 0.3s, padding 0.3s, margin 0.3s',
  },
  leftContainer: {
    height: '100%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rightContainer: {
    height: '100%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitContainer: {},
  exit: {
    padding: 10,
    background: MINESWEEPER_MAIN,
    borderRadius: 20,
    cursor: 'pointer',
  },
  textContainer: { color: MINESWEEPER_MAIN },
  title: { fontSize: '3em' },
  text: {},
  navigation: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    margin: 10,
  },
  back: {
    padding: 10,
    background: MINESWEEPER_MAIN,
    borderRadius: 20,
    cursor: 'pointer',
  },
  next: {
    padding: 10,
    background: MINESWEEPER_MAIN,
    borderRadius: 20,
    cursor: 'pointer',
  },
  settings: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    margin: 10,
  },
  setSize: {
    padding: 10,
    background: MINESWEEPER_MAIN,
    borderRadius: 20,
    cursor: 'pointer',
  },
  setDifficulty: {
    padding: 10,
    background: MINESWEEPER_MAIN,
    borderRadius: 20,
    cursor: 'pointer',
  },
  game: {},
  actions: {
    margin: 10,
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  },
  restart: {
    padding: 10,
    background: MINESWEEPER_MAIN,
    borderRadius: 20,
    cursor: 'pointer',
  },
}));
