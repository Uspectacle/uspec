import { createStyles } from '@mantine/core';
import React from 'react';
import { randomPop, randomize } from '../Utils/Random';
import { entranceAnimation } from '../Utils/DefaultStyle';

export const Note = ({
  seed,
  children,
  delay,
  actionable,
}: {
  seed: number;
  children?: JSX.Element | undefined;
  delay: number;
  actionable?: boolean | undefined;
}) => {
  const { classes } = useStyles({
    seed,
    delay,
    actionable: !!actionable,
  });

  return (
    <div className={classes.container}>
      <div className={classes.note}>
        <div className={classes.pin} />
        {children}
      </div>
    </div>
  );
};

const noteColors = ['#f1f58f', '#ffa930', '#ff66c4', '#a9edf1', '#74ed4b'];
const pinColors = ['#e4cb2e', '#1b835f', '#db2a21', '#4141e7', '#e4dbd2'];

const useStyles = createStyles(
  (
    theme,
    {
      seed,
      delay,
      actionable,
    }: { seed: number; delay: number; actionable: boolean }
  ) => {
    const noteRotate = (randomize(seed * 26) - 0.5) / 30;
    const noteTranslate = `translate(${(randomize(seed * 3) - 0.5) * 2}em, ${
      (randomize(seed * 4) - 0.5) * 2
    }em)`;
    const noteTransform = `rotate(${noteRotate}turn) ${noteTranslate}`;
    const noteTransformHover = `rotate(${noteRotate / 2}turn) ${noteTranslate}`;
    const pinTransform = `translate(${
      (randomize(seed * 5) - 0.5) * 200 - 50
    }%, ${(randomize(seed * 6) - 0.5) * 50}%)`;

    const pinColor = randomPop(pinColors, seed * 15);
    const shadowPosition = `${(randomize(seed * 11) - 0.5) * 8}px ${
      randomize(seed * 10) * 4
    }px`;
    return {
      container: { animation: entranceAnimation(delay) },
      note: {
        backgroundColor: randomPop(noteColors, seed),
        transform: noteTransform,
        boxShadow: '2px 4px 7px 1px rgba(0, 0, 0, 0.4)',
        transition: 'transform 0.3s',
        borderRadius: '-5px',
        '&:hover': !!actionable && {
          transform: noteTransformHover,
        },
        '&:active': !!actionable && {
          boxShadow: 'none',
        },
      },
      pin: {
        position: 'absolute',
        left: '50%',
        top: 0,
        transform: pinTransform,
        backgroundColor: pinColor,
        width: 10,
        zIndex: 10,
        aspectRatio: '1',
        borderRadius: '50%',
        boxShadow: `${shadowPosition} 2px 0.5px rgba(0, 0, 0, 0.4), ${shadowPosition} 0px 1.5px ${pinColor}, ${shadowPosition} 3px 2px rgba(0, 0, 0, 0.2)`,
      },
    };
  }
);
