import { createStyles } from '@mantine/core';
import useGameState from './useGameState';
import { Cell } from './Cell';

export const Grid = () => {
  const { sizeGrid, grid, computeProb, isOver } = useGameState();
  const { classes } = useStyles(sizeGrid);

  return (
    <div className={classes.grid}>
      {grid.map((cell, index) => {
        return (
          <Cell
            cell={cell}
            computeProb={computeProb}
            isOver={isOver}
            key={`cell-${index}`}
          />
        );
      })}
    </div>
  );
};

const useStyles = createStyles((theme, sizeGrid: number) => ({
  grid: {
    padding: '10px',
    margin: '10px',
    display: 'grid',
    gridTemplateColumns: `repeat(${sizeGrid}, 1fr)`,
    gap: sizeGrid <= 10 ? `${Math.floor(10 / sizeGrid)}vmin` : '1px',
    flex: 1,
    aspectRatio: '1',
  },
}));
