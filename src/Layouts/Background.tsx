import { createStyles } from '@mantine/emotion';
import type React from 'react';
import { useEffect, useState } from 'react';
import { BACKGROUND_COLOR } from '../Utils/DefaultStyle';
import { RandomCircle } from './RandomCircle';

export const Background = ({
  length,
  tag,
}: {
  length: number;
  tag?: string | undefined;
}) => {
  const { classes } = useStyles();

  const [circles, setCircles] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    setCircles(
      // biome-ignore lint/suspicious/noArrayIndexKey: Circles are defined by their index
      Array.from({ length }, (_, index) => <RandomCircle key={index} />),
    );
  }, [length]);

  return <div className={`${classes.container}  ${tag ?? ''}`}>{circles}</div>;
};

const useStyles = createStyles(() => ({
  container: {
    zIndex: -1,
    position: 'fixed',
    width: '100%',
    height: '100%',
    transition: 'background 0.5s',
    backgroundColor: BACKGROUND_COLOR,
    overflow: 'hidden',
  },
}));
