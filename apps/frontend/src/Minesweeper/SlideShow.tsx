import { createStyles } from '@mantine/core';
import React, { useRef } from 'react';

export const SlideShow = ({
  activeId,
  children,
}: {
  activeId: number;
  children: JSX.Element[];
}) => {
  const { classes } = useStyles();
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div className={classes.container} ref={ref}>
      <div
        className={classes.slidesContainer}
        style={{
          width: (ref?.current?.offsetWidth || 0) * children.length,
          transform: `translateX(${-(
            activeId * (ref?.current?.offsetWidth || 0)
          )}px)`,
        }}
      >
        {children.map((slide, index) => (
          <div
            key={index}
            className={classes.slide}
            style={{ width: ref?.current?.offsetWidth || 0 }}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

const useStyles = createStyles(() => ({
  container: {
    border: 'solid black 2px',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  slidesContainer: {
    border: 'solid green 2px',
    display: 'flex',
    height: '100%',
    transition: 'transform ease-out 0.3s',
    boxSizing: 'border-box',
  },
  slide: {
    border: 'solid red 2px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    height: '100%',
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));
