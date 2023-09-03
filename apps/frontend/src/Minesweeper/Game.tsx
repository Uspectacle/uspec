import { createStyles } from '@mantine/core';
import { Cell } from './Cell';
import useMinesweeperState from './useMinesweeperState';
import { useEffect, useRef, useState } from 'react';
import { useAutoBestPlay, useAutoRandomPlay } from './useAutoPlay';

export const Game = ({
  showProb,
  randomPlay,
  autoPlayTime,
}: {
  showProb: boolean;
  randomPlay: boolean;
  autoPlayTime: number | null;
}) => {
  const { current, currentIndex } = useMinesweeperState();
  const { sizeGrid, grid, isOver } = current;
  const { classes } = useStyles({ sizeGrid });
  useAutoBestPlay(randomPlay ? null : autoPlayTime);
  useAutoRandomPlay(randomPlay ? autoPlayTime : null);

  const ref = useRef<HTMLDivElement | null>(null);
  const [fontSize, setFontSize] = useState(10);

  const updateFontSize = () => {
    if (!ref.current) return;
    const cellWidth = ref.current.clientWidth;
    setFontSize((0.5 * cellWidth) / sizeGrid);
  };

  useEffect(() => {
    updateFontSize();
    window.addEventListener('resize', updateFontSize);
    return () => {
      window.removeEventListener('resize', updateFontSize);
    };
  }, [currentIndex, sizeGrid]);

  return (
    <div className={classes.background}>
      <div
        ref={ref}
        className={classes.grid}
        style={{ fontSize: `${fontSize}px` }}
        key={`grid-${currentIndex}`}
      >
        {grid.map((cell, index) => (
          <Cell
            cell={cell}
            showProb={showProb}
            isOver={isOver}
            key={`cell-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

const useStyles = createStyles((theme, { sizeGrid }: { sizeGrid: number }) => ({
  background: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: '1',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 10,
    '& > span': {
      color: '#b38c78',
      fontSize: '30px',
    },
    [theme.fn.smallerThan(500)]: {
      flex: 1,
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: `repeat(${sizeGrid}, 1fr)`,
    flex: 1,
    aspectRatio: '1',
    gap: 5,
  },
}));
