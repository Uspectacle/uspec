import { createStyles } from '@mantine/core';
import React, { useState } from 'react';
import { MINESWEEPER_MAIN } from './MinesweeperStyle';
import { Game } from './Game';
import { SetSizeControl } from './SetSizeControl';
import { SetMineControl } from './SetMineControl';
import { RestartButton } from './RestartButton';
import { ExitButton } from './ExitButton';
import { BackButton } from './BackButton';
import { NextButton } from './NextButton';
import { Page } from './Page';
import { useTranslation } from 'react-i18next';

export const MinesweeperLayout = ({
  focus,
  setFocus,
}: {
  focus: boolean;
  setFocus: (focus: boolean) => void;
}) => {
  const [page, setPage] = useState(0);
  const { classes } = useStyles();
  const { t } = useTranslation();

  const pages = [
    {
      title: t('minesweeper.intro.title'),
      text: t('minesweeper.intro.text'),
    },
    {
      title: 'How To No Loose',
      text: `Welcome to page 1`,
    },
    {
      title: 'Good Morning Baltimore',
      text: `Welcome to page 2`,
    },
    {
      title: 'Hello Darkness',
      text: `Welcome to page 3`,
    },
    {
      title: 'Yo man How do you do',
      text: `Welcome to page 4`,
    },
    {
      title: 'Last Page',
      text: `Welcome to page 5. This is the end`,
    },
  ];

  return (
    <div
      className={classes.container}
      style={!focus ? { opacity: 0, zIndex: -1 } : {}}
    >
      <div className={classes.leftContainer}>
        <div className={classes.exit}>
          <ExitButton setFocus={setFocus} />
        </div>
        <div className={classes.textContainer}>
          {pages.map(({ title, text }, index) => (
            <Page
              title={title}
              text={text}
              active={index === page}
              key={`page-${index}`}
            />
          ))}
        </div>
        <div className={classes.navigation}>
          <BackButton page={page} setPage={setPage} />
          <NextButton page={page} setPage={setPage} max={pages.length - 1} />
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.settings}>
          <SetSizeControl />
          <SetMineControl />
          <RestartButton />
        </div>
        <Game />
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
    justifyContent: 'space-evenly',
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
  exit: { position: 'absolute', top: 0, left: 0, margin: 10 },
  textContainer: { border: 'solids black 2px' },
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
