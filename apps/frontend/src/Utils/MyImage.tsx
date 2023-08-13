import React, { useEffect, useRef, useState } from 'react';
import { createStyles, keyframes } from '@mantine/core';
import { WHITE } from '../../utils/DefaultStyle';
type PropsMyImage = {
  src: string;
  width: number;
  height: number;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | undefined;
  style?: React.CSSProperties | undefined;
};

export const MyImage = ({
  src,
  width,
  height,
  style,
  objectFit,
}: PropsMyImage) => {
  const { classes } = useStyles();
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
    else imgRef.current?.addEventListener('load', () => setLoaded(true));
  }, [imgRef, src]);

  const containerStyle: React.CSSProperties = {
    aspectRatio: `${width} / ${height}`,
    ...style,
  };

  return (
    <div className={classes.container} style={containerStyle}>
      <img
        className={classes.blur}
        src={`/small${src}`}
        style={{
          objectFit,
          opacity: loaded || src.slice(src.length - 3) === 'svg' ? 0 : 1,
        }}
        loading="lazy"
        ref={imgRef}
      />
      <div
        className={classes.pulse}
        style={loaded ? { animation: 'none', display: 'none' } : { objectFit }}
      />
      <img
        className={classes.img}
        src={src}
        style={{
          objectFit,
          opacity: loaded || src.slice(src.length - 3) === 'svg' ? 1 : 0,
        }}
        loading="lazy"
        ref={imgRef}
      />
    </div>
  );
};

const pulse = keyframes({
  '0%': { opacity: 0 },
  '50%': { opacity: 0.1 },
  '100%': { opacity: 0 },
});

const useStyles = createStyles(() => ({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    objectFit: 'contain',
  },

  blur: {
    transition: 'opacity 250ms ease-in-out',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    zIndex: 1,
  },

  pulse: {
    animation: `${pulse} 2.5s infinite`,
    backgroundColor: WHITE,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    zIndex: 2,
  },

  img: {
    transition: 'opacity 250ms ease-in-out',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    zIndex: 3,
  },
}));
