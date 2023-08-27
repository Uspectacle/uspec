import { createStyles } from '@mantine/core';
import React, { useRef, useEffect, useState } from 'react';

export const SlideShow = ({
  activeId,
  children,
}: {
  activeId: number;
  children: JSX.Element[];
}) => {
  const { classes } = useStyles();
  const ref = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setContainerWidth(ref.current.offsetWidth);
    }
  }, []);

  return (
    <div className={classes.container} ref={ref}>
      <div className={classes.slidesContainer}>
        <div
          className={classes.slidesSubContainer}
          style={{
            width: containerWidth * children.length,
            transform: `translateX(${-(activeId * containerWidth)}px)`,
          }}
        >
          {children.map((slide, index) => (
            <div
              key={index}
              className={classes.slide}
              style={{ width: containerWidth }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const useStyles = createStyles(() => ({
  container: {
    border: 'solid black 2px',
    width: '100%',
    height: '100%',
  },
  slidesContainer: {
    border: 'solid blue 2px',
    overflow: 'hidden',
    height: '100%',
  },
  slidesSubContainer: {
    border: 'solid green 2px',
    display: 'flex',
    height: '100%',
    transition: 'transform ease-out 0.3s',
  },
  slide: {
    border: 'solid red 2px',
    height: '100%',
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));
