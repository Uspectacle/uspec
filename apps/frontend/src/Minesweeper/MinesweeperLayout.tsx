import { createStyles } from '@mantine/core';
import React, { useState } from 'react';
import { Game } from './Game/Game';
import { SetSizeControl } from './Buttons/SetSizeControl';
import { SetMineControl } from './Buttons/SetMineControl';
import { Page } from './PageLayout/Page';
import { useTranslation } from 'react-i18next';
import { SlideShow } from './PageLayout/SlideShow';
import { GameNavigation } from './PageLayout/GameNavigation';
import {
  PageNavigationBottom,
  PageNavigationTop,
} from './PageLayout/PageNavigation';
import { ConfettiControl } from './ConfettiControl';

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
      title: t('minesweeper.rules.title'),
      text: t('minesweeper.rules.text'),
    },
    {
      title: 'Show prob',
      text: `Welcome to page 2`,
    },
    {
      title: 'Auto play and prob',
      text: `Welcome to page 3`,
    },
    {
      title: 'Auto Play Fast',
      text: `Welcome to page 4`,
    },
  ];

  return (
    <div
      className={classes.container}
      style={!focus ? { opacity: 0, zIndex: -1 } : {}}
    >
      <ConfettiControl active={page === 1 || page === 2} />
      <div
        className={classes.leftContainer}
        style={!focus ? { opacity: 0, transform: 'translateX(-100%)' } : {}}
      >
        <PageNavigationTop
          page={page}
          pagesLength={pages.length}
          setPage={setPage}
          setFocus={setFocus}
        />
        <div className={classes.pageContainer}>
          <div className={classes.slideShow}>
            <SlideShow activeId={page}>
              {pages.map(({ title, text }, index) => (
                <Page title={title} text={text} key={`page-${index}`} />
              ))}
            </SlideShow>
          </div>
          <PageNavigationBottom
            page={page}
            pagesLength={pages.length}
            setPage={setPage}
          />
        </div>
      </div>
      <div
        className={classes.rightContainer}
        style={!focus ? { opacity: 0, transform: 'translateX(100%)' } : {}}
      >
        <div className={classes.actions}>
          <div className={classes.settings}>
            <SetSizeControl />
            <SetMineControl />
          </div>
          <GameNavigation />
        </div>
        <Game
          showProb={page === 2 || page === 3}
          autoPlayTime={
            page === 0 ? 1000 : page === 3 ? 1000 : page === 4 ? 100 : null
          }
          randomPlay={page == 0}
        />
      </div>
    </div>
  );
};

const useStyles = createStyles((theme) => ({
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
    [theme.fn.smallerThan(750)]: {
      flexDirection: 'column',
    },
  },
  leftContainer: {
    height: '100%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    boxSizing: 'border-box',
    overflow: 'hidden',
    transition: 'opacity 0.5s, transform 0.5s',
    transitionDelay: '0.5s',
    [theme.fn.smallerThan(750)]: {
      flexDirection: 'column',
      height: '50%',
      width: '100%',
    },
  },
  rightContainer: {
    overflow: 'hidden',
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    transition: 'opacity 0.5s, transform 0.5s',
    transitionDelay: '0.5s',
    [theme.fn.smallerThan(750)]: {
      flexDirection: 'row',
      height: '50%',
      width: '100%',
    },
    [theme.fn.smallerThan(500)]: {
      alignItems: 'center',
    },
    [theme.fn.smallerThan(400)]: {
      flexDirection: 'column-reverse',
    },
  },
  pageContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    boxSizing: 'border-box',
    overflow: 'hidden',
    transition: 'opacity 0.3s, transform 0.3s',
  },
  slideShow: {
    overflow: 'hidden',
    width: '100%',
    boxSizing: 'border-box',
    padding: '1em',
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
    [theme.fn.smallerThan(500)]: {
      flexDirection: 'column',
      width: 'auto',
      padding: 5,
    },
    [theme.fn.smallerThan(400)]: {
      flexDirection: 'row',
    },
  },
  settings: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    alignItems: 'center',
    [theme.fn.smallerThan(500)]: {
      flexDirection: 'column',
      padding: 5,
    },
    [theme.fn.smallerThan(400)]: {
      display: 'none',
    },
  },
}));
