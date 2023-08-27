import { createStyles } from '@mantine/core';
import React, { useState } from 'react';
import { Game } from './Game';
import { SetSizeControl } from './SetSizeControl';
import { SetMineControl } from './SetMineControl';
import { RestartButton } from './RestartButton';
import { ExitButton } from './ExitButton';
import { BackButton } from './BackButton';
import { NextButton } from './NextButton';
import { Page } from './Page';
import { useTranslation } from 'react-i18next';
import { SlideShow } from './SlideShow';

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
      <div
        className={classes.leftContainer}
        style={
          !focus
            ? {
                opacity: 0,
                transform: 'translateX(-100%)',
              }
            : {}
        }
      >
        <div className={classes.exit}>
          <ExitButton setFocus={setFocus} />
        </div>
        <div className={classes.slideShow}>
          <SlideShow activeId={page}>
            {pages.map(({ title, text }, index) => (
              <Page
                title={title}
                text={text}
                active={index === page}
                key={`page-${index}`}
              />
            ))}
          </SlideShow>
        </div>
        <div className={classes.navigation}>
          <BackButton page={page} setPage={setPage} />
          <NextButton page={page} setPage={setPage} max={pages.length - 1} />
        </div>
      </div>
      <div
        className={classes.rightContainer}
        style={
          !focus
            ? {
                opacity: 0,
                transform: 'translateX(100%)',
              }
            : {}
        }
      >
        <div className={classes.actions}>
          <div className={classes.settings}>
            <SetSizeControl />
            <SetMineControl />
          </div>
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
    alignItems: 'stretch',
    overflow: 'hidden',
    transition: 'opacity 0.3s, transform 0.3s',
  },
  rightContainer: {
    height: '100%',
    overflow: 'hidden',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    transition: 'opacity 0.3s, transform 0.3s',
  },
  exit: { position: 'absolute', zIndex: 10, top: 0, left: 0, margin: 10 },
  slideShow: {
    border: 'solid white 2px',
    overflow: 'hidden',
    width: '100%',
    height: '80%',
    boxSizing: 'border-box',
    padding: 10,
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    margin: 10,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    gap: 10,
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    alignItems: 'center',
  },
  settings: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 10,
    gap: 10,
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    alignItems: 'center',
  },
}));
