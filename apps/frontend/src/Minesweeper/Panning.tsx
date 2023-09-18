import React, { useState } from 'react';
import { createStyles } from '@mantine/core';

const sigmoid = (x: number) => 1 / (Math.exp(-x) + 1);

const softClamp = (
  currentPosition: number,
  nextPosition: number,
  min: number,
  max: number
) => {
  if (min > max) return (min + max) / 2;
  if (currentPosition > nextPosition)
    return min + (nextPosition - min) * sigmoid(nextPosition - min);
  return max - (max - nextPosition) * sigmoid(max - nextPosition);
};

export const Panning = ({
  children,
  window,
}: {
  children: JSX.Element;
  window: { top: number; bottom: number; left: number; right: number };
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [initial, setInitial] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const { classes } = useStyles();

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDragging(true);
    setInitial({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!dragging) return;
    const clamp = {
      min: {
        x: window.right - e.currentTarget.offsetWidth,
        y: window.bottom - e.currentTarget.offsetHeight,
      },
      max: { x: window.left, y: window.top },
    };
    const nextPosition = { x: e.clientX - initial.x, y: e.clientY - initial.y };
    const x = softClamp(position.x, nextPosition.x, clamp.min.x, clamp.max.x);
    const y = softClamp(position.y, nextPosition.y, clamp.min.y, clamp.max.y);
    setPosition({ x, y });
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <div
      className={classes.main}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      draggable="false"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
    >
      {children}
    </div>
  );
};

const useStyles = createStyles(() => ({
  main: {
    drag: 'false',
    cursor: 'grab',
    transition: 'transform 0.2s ease-out',
    userDrag: 'none',
    userSelect: 'none',
    '&:active': {
      cursor: 'grabbing',
    },
  },
}));
