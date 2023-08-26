import { createStyles } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import { randomPop, randomize } from '../Utils/Random';

interface Props {
  seed: number;
  children?: JSX.Element | undefined;
  actionable?: boolean | undefined;
  margin?: string | number | undefined;
}

export const Note = ({ seed, children, actionable, margin }: Props) => {
  const { classes } = useStyles({
    seed,
    actionable: !!actionable,
  });

  const ref = useRef<HTMLDivElement | null>(null);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShow(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
        rootMargin: '50px',
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      className={`${classes.container} ${show ? classes.show : ''}`}
      style={{ margin: margin ?? 5 }}
      ref={ref}
    >
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
  seed: number;
  actionable: boolean;
}

const useStyles = createStyles((theme, { seed, actionable }: StyleProps) => {
  const noteRotate = (randomize(seed * 26) - 0.5) / 40;
  const noteTranslate = `translate(${(randomize(seed * 3) - 0.5) * 1.5}em, ${
    (randomize(seed * 4) - 0.5) * 1.5
  }em)`;
  const noteTransform = `rotate(${noteRotate}turn) ${noteTranslate}`;
  const noteTransformHover = `rotate(${noteRotate / 3}turn) ${noteTranslate}`;
  const pinTransform = `translate(${(randomize(seed * 5) - 0.5) * 200 - 50}%, ${
    (randomize(seed * 6) - 0.5) * 50
  }%)`;

  const pinColor = randomPop(pinColors, seed * 15);
  const shadowPosition = `${(randomize(seed * 11) - 0.5) * 8}px ${
    randomize(seed * 10) * 4
  }px`;
  return {
    container: {
      transform: `translateX(50px)`,
      opacity: 0,
      transition: 'opacity 0.3s, transform 0.3s',
    },
    show: {
      transform: 'translate(0px, 0px)',
      opacity: 1,
      transition: 'opacity 0.3s, transform 0.3s',
    },
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
});
