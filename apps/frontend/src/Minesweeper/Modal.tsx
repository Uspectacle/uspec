import React from 'react';
import { createStyles } from '@mantine/core';
import { animated, useSpring } from '@react-spring/web';

export const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}) => {
  const { classes } = useStyles();

  const { scale, opacity } = useSpring({
    scale: isOpen ? 1 : 0,
    opacity: isOpen ? 1 : 0,
  });

  return (
    <animated.div
      className={classes.container}
      style={{
        opacity,
        pointerEvents: isOpen ? 'all' : 'none',
        backgroundColor: opacity.to((o) => `rgba(0,0,0,${0.2 * o})`),
        backdropFilter: opacity.to((o) => `blur(${8 * o}px)`),
      }}
    >
      <div className={classes.background} onClick={onClose} />
      <animated.div className={classes.modal} style={{ scale }}>
        {children}
      </animated.div>
    </animated.div>
  );
};

const useStyles = createStyles(() => ({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    zIndex: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },
  modal: {
    backgroundColor: 'white',
    zIndex: 11,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
}));
