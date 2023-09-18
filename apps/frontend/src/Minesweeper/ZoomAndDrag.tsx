import React, { useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';
import {
  createUseGesture,
  dragAction,
  pinchAction,
  wheelAction,
} from '@use-gesture/react';
import { useWindowSize } from 'usehooks-ts';

const useGesture = createUseGesture([dragAction, pinchAction, wheelAction]);

export const ZoomAndDrag = ({ children }: { children: JSX.Element }) => {
  const [style, api] = useSpring(() => ({ x: 0, y: 0, scale: 1 }));
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  useEffect(() => {
    const handler = (e: Event) => e.preventDefault();
    document.addEventListener('gesturestart', handler);
    document.addEventListener('gesturechange', handler);
    document.addEventListener('gestureend', handler);
    return () => {
      document.removeEventListener('gesturestart', handler);
      document.removeEventListener('gesturechange', handler);
      document.removeEventListener('gestureend', handler);
    };
  }, []);

  const ref = React.useRef<HTMLDivElement>(null);

  const margin = 100;
  const clampPosition = (x: number, y: number) => {
    const { width, height } = ref.current!.getBoundingClientRect();
    const xMax = width / 2 - windowWidth / 2 + margin;
    const xMin = -xMax;
    const yMax = height / 2 - windowHeight / 2 + margin;
    const yMin = -yMax;
    return {
      x: xMax < xMin ? 0 : Math.max(xMin, Math.min(x, xMax)),
      y: yMax < yMin ? 0 : Math.max(yMin, Math.min(y, yMax)),
    };
  };

  useGesture(
    {
      onDrag: ({ pinching, cancel, offset: [x, y] }) => {
        if (pinching) return cancel();
        api.start(clampPosition(x, y));
      },
      onPinch: ({
        origin: [ox, oy],
        first,
        movement: [ms],
        offset: [s],
        memo,
      }) => {
        if (first) {
          const { width, height, x, y } = ref.current!.getBoundingClientRect();
          const tx = ox - (x + width / 2);
          const ty = oy - (y + height / 2);
          memo = [style.x.get(), style.y.get(), tx, ty];
        }
        const x = memo[0] - (ms - 1) * memo[2];
        const y = memo[1] - (ms - 1) * memo[3];
        api.start({ scale: s, ...clampPosition(x, y) });
        return memo;
      },
      onWheel: ({ delta, event }) => {
        event.preventDefault();
        const { width, height, x, y } = ref.current!.getBoundingClientRect();
        const tx = event.clientX - (x + width / 2);
        const ty = event.clientY - (y + height / 2);
        const scale = Math.max(
          0.2,
          Math.min(style.scale.get() - delta[1] / 200, 2)
        );
        const ratio = scale / style.scale.get();
        const xNew = style.x.get() - (ratio - 1) * tx;
        const yNew = style.y.get() - (ratio - 1) * ty;
        api.start({
          scale,
          ...clampPosition(xNew, yNew),
        });
      },
    },
    {
      target: ref,
      drag: { from: () => [style.x.get(), style.y.get()] },
      pinch: { scaleBounds: { min: 0.5, max: 2 }, rubberband: true },
      wheel: { eventOptions: { passive: false } },
    }
  );

  return (
    <animated.div ref={ref} style={{ ...style, ...{ touchAction: 'none' } }}>
      {children}
    </animated.div>
  );
};
