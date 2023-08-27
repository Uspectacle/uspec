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
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    if (ref.current) setWidth(ref.current.offsetWidth);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [children.length]);

  return (
    <div className={classes.container} ref={ref}>
      <div
        className={classes.slidesContainer}
        style={{
          width: width * children.length,
          transform: `translateX(${-activeId * width}px)`,
        }}
      >
        {children.map((slide, index) => (
          <div
            key={index}
            className={classes.slide}
            style={{
              width,
              opacity: index === activeId ? 1 : 0,
            }}
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
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  slidesContainer: {
    display: 'flex',
    height: '100%',
    transition: 'transform ease-out 0.3s',
    boxSizing: 'border-box',
  },
  slide: {
    boxSizing: 'content-box',
    overflowX: 'hidden',
    overflowY: 'auto',
    height: '100%',
    borderRadius: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'opacity 0.3s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
