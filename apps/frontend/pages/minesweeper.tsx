import { createStyles } from '@mantine/core';
import { NextPage } from 'next';
import { Layout } from '../src/Layouts/Layout';
import React, { useState } from 'react';
import {
  BLACK,
  SHADOW,
  WHITE,
  entranceAnimation,
} from '../src/Utils/DefaultStyle';
import { Summary } from '../src/Minesweeper/Summary';

const Minesweeper: NextPage = () => {
  const { classes } = useStyles();
  const [page, setPage] = useState(0);

  const Title = ({ style }: { style: React.CSSProperties }) => (
    <div
      className={classes.titleContainer}
      style={style}
      onClick={() => setPage(1)}
    >
      <div className={classes.title}>How To Sweep Mines</div>
      <div className={classes.text}>Begin</div>
    </div>
  );

  const Game = () => (
    <div className={classes.pageContainer}>
      <div className={classes.titleContainer} onClick={() => setPage(0)}>
        <div className={classes.title}>Game</div>
        <div className={classes.text}>Exit</div>
      </div>
    </div>
  );

  return (
    <Layout
      summary={<Summary />}
      reduced={!!page}
      backgroundStyle={{
        height: '100dvh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className={classes.container}
        style={
          page === 0
            ? {
                minWidth: '0',
                minHeight: '0',
                flex: 0,
              }
            : {}
        }
      >
        {<Title style={page === 0 ? {} : { opacity: 0 }} />}
        {page === 1 && <Game />}
      </div>
    </Layout>
  );

  return (
    <Layout summary={<Summary />}>
      <div className={classes.container}>
        <div className={classes.pageContainer}>
          <div className={classes.title}>How To Sweep Mines</div>
          <div className={classes.text}>
            Minesweeper is a puzzle game where you have to find every mines in a
            field without digging them.
          </div>
          <div className={classes.navigation}>
            <div className={classes.back}>Back</div>
            <div className={classes.next}>Next</div>
          </div>
        </div>
        <div className={classes.gameContainer}>
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
    </Layout>
  );
};

const useStyles = createStyles(() => ({
  titleContainer: {
    maxWidth: 1000,
    backgroundColor: WHITE,
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'wrap',
    boxShadow: SHADOW,
  },
  title: { fontSize: '3em' },
  text: {},
  container: {
    flex: 1,
    minWidth: '100%',
    minHeight: '100dvh',
    backgroundColor: BLACK,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'wrap',
    transition: 'min-height 0.3s, min-width 0.3s',
    animation: entranceAnimation(0.1),
    boxShadow: SHADOW,
  },
  pageContainer: {
    animation: entranceAnimation(0.1),
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

export default Minesweeper;
