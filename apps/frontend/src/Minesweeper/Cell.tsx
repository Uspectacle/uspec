import { createStyles } from '@mantine/core';
import { CellType } from './cellType';
import { MouseEventHandler, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  clearHighlight,
  dig,
  flag,
  highlightNeighbors,
  neighborsCheck,
} from './gameStateStore';
import { SHADOW } from '../Utils/DefaultStyle';
import { cellBrightness, cellColor, cellFontColor } from './MinesweeperStyle';

interface propsType {
  cell: CellType;
  computeProb: boolean;
  isOver: boolean;
}

export const Cell = ({ cell, computeProb, isOver }: propsType) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement | null>(null);

  const updateFontSize = () => {
    if (!ref.current) return;
    const cellWidth = ref.current.clientWidth;
    const cellHeight = ref.current.clientHeight;
    const fontSize = Math.min(cellWidth, cellHeight) * 0.5;
    ref.current.style.fontSize = `${fontSize}px`;
  };

  useEffect(() => {
    updateFontSize();
    window.addEventListener('resize', updateFontSize);
    return () => {
      window.removeEventListener('resize', updateFontSize);
    };
  }, []);

  const image = cell.isFlag
    ? '🚩'
    : !cell.isShown
    ? computeProb
      ? `${Math.floor(cell.prob * 100)}%`
      : ''
    : cell.isMine
    ? '💣'
    : String(cell.num || '');

  const leftClick = () => {
    if (isOver) return;
    if (cell.isFlag) return;
    dispatch(cell.isShown ? neighborsCheck(cell.index) : dig(cell.index));
  };

  const rightClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    if (isOver) return;
    dispatch(cell.isShown ? neighborsCheck(cell.index) : flag(cell.index));
    return false;
  };

  const mouseHover = () => {
    dispatch(highlightNeighbors(cell.index));
  };

  const mouseOut = () => {
    dispatch(clearHighlight());
  };

  return (
    <div
      ref={ref}
      className={classes.cell}
      onClick={leftClick}
      onContextMenu={rightClick}
      onMouseOver={mouseHover}
      onMouseOut={mouseOut}
      style={{
        backgroundColor: cellColor(cell),
        filter: `brightness(${cellBrightness(cell)}%)`,
        color: cellFontColor(cell),
        opacity:
          cell.isShown && cell.num === 0 && cell.isShown && !cell.isMine
            ? 0
            : 1,
      }}
    >
      {image}
    </div>
  );
};

// https://coolors.co/6e0d25-ffffb3-dcab6b-774e24-6a381f

const useStyles = createStyles(() => ({
  cell: {
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'space-around',
    cursor: 'pointer',
    alignItems: 'center',
    fontWeight: 'bold',
    userSelect: 'none',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    aspectRatio: '1',
    transition:
      'background-color 0.3s, opacity 0.3s, transform 0.3s, filter 0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: SHADOW,
      filter: `brightness(100%) !important`,
    },
    '&:active': {
      transform: 'scale(1.05)',
      boxShadow: SHADOW,
    },
  },
}));
