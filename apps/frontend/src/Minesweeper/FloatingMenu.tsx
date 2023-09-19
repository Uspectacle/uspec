import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useGesture } from '@use-gesture/react';
import { animated, useSpring, useSprings } from '@react-spring/web';
import { createStyles } from '@mantine/core';
import Ellipsis from '../../public/svg/ellipsis';
import { clampToBounds } from '../Utils/NumberTools';

const BUTTON_SIZE = 56;

export const FloatingMenu = ({
  buttons,
}: {
  buttons: {
    key: number;
    color: string;
    span: JSX.Element;
    action: () => void;
  }[];
}) => {
  const { classes } = useStyles();
  const buttonRef = useRef<HTMLDivElement>(null!);
  const avatarRefs = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null!);
  const [isVisible, setVisible] = useState(true);
  const [avatarRefInitialPositions, setAvatarRefInitialPositions] = useState<
    number[]
  >([]);

  const [{ x, y, opacity }, api] = useSpring(
    () => ({ x: 0, y: 0, opacity: 1 }),
    []
  );
  const [avatarSprings, avatarApi] = useSprings(
    buttons.length,
    () => ({ y: 0 }),
    []
  );

  useEffect(() => {
    if (avatarRefInitialPositions.length === 0) {
      const { y: buttonY } = buttonRef.current.getBoundingClientRect();
      setAvatarRefInitialPositions(
        avatarRefs.current.map(
          (node) => buttonY - node.getBoundingClientRect().y
        )
      );
    }
    avatarApi.start((i) => ({
      y: avatarRefInitialPositions[i],
      immediate: true,
    }));
  }, []);

  const getBounds = useCallback(() => {
    const { height, width } = containerRef.current.getBoundingClientRect();
    return {
      top: 0,
      left: 0,
      right: window.innerWidth - width,
      bottom: window.innerHeight - height,
    };
  }, []);
  const backgroundTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const avatarTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const bindGestures = useGesture(
    {
      onDrag: ({
        down,
        offset: [ox, oy],
        velocity: [vx, vy],
        direction: [dx, dy],
      }) => {
        api.start({
          x: ox,
          y: oy,
          immediate: down,
          onChange: ({ value }) => api.set(clampToBounds(value, getBounds())),
          config: (key) => ({
            velocity: key === 'x' ? vx * dx : vy * dy,
            decay: true,
          }),
        });
      },
      onHover: ({ hovering, event }) => {
        const hover = event.target === containerRef.current ? isVisible : true;
        if (hovering && hover) {
          if (backgroundTimeoutRef.current) {
            clearTimeout(backgroundTimeoutRef.current);
          }
          if (avatarTimeoutRef.current) {
            clearTimeout(avatarTimeoutRef.current);
          }
          setVisible(true);
          api.start({ opacity: 1 });
          avatarApi.start({ y: 0 });
          return;
        }
        backgroundTimeoutRef.current = setTimeout(() => {
          api.start({ opacity: 0 });
        }, 1000);
        avatarTimeoutRef.current = setTimeout(() => {
          avatarApi.start((i) => ({
            y: avatarRefInitialPositions[i],
            onRest: () => setVisible(false),
          }));
        }, 1200);
      },
    },
    {
      drag: {
        from: () => [x.get(), y.get()],
        bounds: getBounds,
        rubberband: true,
      },
    }
  );
  const { onPointerEnter, onPointerLeave, onPointerDown, ...restGestures } =
    bindGestures();
  const handlePointerDown =
    (isBackground: boolean) => (e: React.PointerEvent<HTMLElement>) => {
      if (isBackground && !isVisible) {
        return;
      }
      if (onPointerDown) {
        onPointerDown(e);
      }
    };
  return (
    <animated.div
      className={classes.container}
      ref={containerRef}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerDown={handlePointerDown(true)}
      {...restGestures}
      style={{
        x,
        y,
        backgroundColor: opacity.to((o) => `rgba(0,0,0,${0.2 * o})`),
        backdropFilter: opacity.to((o) => `blur(${8 * o}px)`),
      }}
    >
      <animated.div
        className={classes.mainButton}
        ref={buttonRef}
        onPointerEnter={onPointerEnter}
        onPointerDown={handlePointerDown(false)}
        {...restGestures}
        style={{
          boxShadow: opacity.to(
            (o) => `0px 3px 8px 2px rgba(0,0,0,${0.4 * 1 - o})`
          ),
          transform: opacity.to((o) => `rotate(${(o * 3) / 4}turn)`),
        }}
      >
        <span>
          <Ellipsis />
        </span>
      </animated.div>
      {avatarSprings.map((springs, index) => (
        <animated.div
          className={classes.button}
          key={buttons[index].key}
          ref={(ref) => (avatarRefs.current[index] = ref!)}
          style={{ ...springs, backgroundColor: buttons[index].color }}
          onClick={buttons[index].action}
        >
          {buttons[index].span}
        </animated.div>
      ))}
    </animated.div>
  );
};

const useStyles = createStyles(() => ({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 12,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
    touchAction: 'none',
    zIndex: 5,
  },

  button: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: '50%',
    mx: 4,
    border: 'none',
    backgroundClip: 'content-box',

    '&:focus-visible': {
      outlineOffset: 2,
      outline: '#569AFF99 auto 6px',
    },

    '& > span': {
      borderRadius: 'inherit',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
  },
  mainButton: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: '50%',
    border: 'none',
    position: 'relative',
    backgroundClip: 'content-box',
    zIndex: 1,
    touchAction: 'none',

    '&:focus-visible': {
      outlineOffset: 2,
      outline: '#569AFF99 auto 6px',
    },

    '& > span': {
      borderRadius: 'inherit',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#fafafa',
    },
  },
}));
