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
        style={!focus ? { opacity: 0, transform: 'translateX(-100%)' } : {}}
      >
        <div className={classes.exit}>
          <BackButton page={page} setPage={setPage} layout={'mobile'} />
          <ExitButton setFocus={setFocus} />
          <NextButton
            page={page}
            setPage={setPage}
            max={pages.length - 1}
            layout={'mobile'}
          />
        </div>
        <div className={classes.pageContainer}>
          <div className={classes.slideShow}>
            <SlideShow activeId={page}>
              {pages.map(({ title, text }, index) => (
                <Page title={title} text={text} key={`page-${index}`} />
              ))}
            </SlideShow>
          </div>
          <div className={classes.navigation}>
            <BackButton page={page} setPage={setPage} />
            <NextButton page={page} setPage={setPage} max={pages.length - 1} />
          </div>
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
          <RestartButton />
        </div>
        <Game />
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
    transition: 'opacity 0.3s, padding 0.3s, margin 0.3s',
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
    transition: 'opacity 0.3s, transform 0.3s',
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
    transition: 'opacity 0.3s, transform 0.3s',
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
  exit: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
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
  navigation: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    margin: 10,
    [theme.fn.smallerThan(750)]: {
      display: 'none',
    },
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
    justifyContent: 'space-around',
    padding: 10,
    gap: 10,
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
