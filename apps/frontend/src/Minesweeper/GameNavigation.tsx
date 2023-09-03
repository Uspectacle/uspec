import { createStyles } from '@mantine/core';
import React from 'react';
import { RestartButton } from './RestartButton';
import { BackButton } from './BackButton';
import { NextButton } from './NextButton';
import { MyImage } from '../Utils/MyImage';
import { useDispatch } from 'react-redux';
import { setCurrentIndex } from './minesweeperStateStore';
import useMinesweeperState from './useMinesweeperState';

export const GameNavigation = () => {
  const dispatch = useDispatch();
  const { currentIndex, gameStates } = useMinesweeperState();
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <NextButton
        page={currentIndex}
        max={gameStates.length - 1}
        setPage={(currentIndex) => dispatch(setCurrentIndex(currentIndex))}
      >
        <>
          <MyImage
            src="/svg/reply-arrow.svg"
            width={800}
            height={800}
            style={{ width: '1em' }}
          />
        </>
      </NextButton>
      <RestartButton />
      <BackButton
        page={currentIndex}
        setPage={(currentIndex) => dispatch(setCurrentIndex(currentIndex))}
      >
        <>
          <MyImage
            src="/svg/reply-arrow.svg"
            width={800}
            height={800}
            style={{ transform: 'scaleX(-1)', width: '1em' }}
          />
        </>
      </BackButton>
    </div>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    alignItems: 'center',
    [theme.fn.smallerThan(750)]: {
      display: 'none',
    },
  },
}));
