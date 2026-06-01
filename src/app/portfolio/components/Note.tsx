import { createStyles } from '@mantine/emotion';
import type React from 'react';
import { mulberry32, pick } from '@/components/Utils/random';

interface Props {
  seed?: number;
  children?: React.JSX.Element | undefined;
  actionable?: boolean | undefined;
  margin?: string | number | undefined;
}

export const Note = ({ seed, children, actionable, margin = 5 }: Props) => {
  const { classes } = useStyles({
    seed,
    actionable: !!actionable,
  });

  return (
    <div style={{ margin }}>
      <div className={classes.note}>
        <div className={classes.pin} />
        {children}
      </div>
    </div>
  );
};

const noteColors = ['#f1f58f', '#ffa930', '#ff78cb', '#a9edf1', '#74ed4b'];
const pinColors = ['#e4cb2e', '#1b835f', '#db2a21', '#4141e7', '#e4dbd2'];

interface StyleProps {
  seed?: number;
  actionable: boolean;
}

const useStyles = createStyles((_theme, { actionable, seed }: StyleProps) => {
  const random = seed ? mulberry32(seed) : Math.random;

  const noteRotate = (random() - 0.5) / 40;
  const noteTranslate = `translate(${(random() - 0.5) * 1.5}em, ${
    (random() - 0.5) * 1.5
  }em)`;
  const noteTransform = `rotate(${noteRotate}turn) ${noteTranslate}`;
  const noteTransformHover = `rotate(${noteRotate / 3}turn) ${noteTranslate}`;
  const pinTransform = `translate(${(random() - 0.5) * 200 - 50}%, ${
    (random() - 0.5) * 50
  }%)`;
  const pinColor = pick(pinColors, random());
  const shadowPosition = `${(random() - 0.5) * 8}px ${random() * 4}px`;

  return {
    note: {
      backgroundColor: pick(noteColors, random()),
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
});
