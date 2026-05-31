import { createStyles } from '@mantine/core';
import { Cell } from './Cell';
import useMinesweeperState from '../Store/useMinesweeperState';
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

  return (
    <div className={classes.grid} key={`grid-${currentIndex}`}>
      {grid.map((cell, index) => (
        <Cell
          cell={cell}
          showProb={showProb}
          isOver={isOver}
          key={`cell-${index}`}
        />
      ))}
    </div>
  );
};

const useStyles = createStyles((theme, { sizeGrid }: { sizeGrid: number }) => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: `repeat(${sizeGrid}, 1fr)`,
    gap: 5,
  },
}));
