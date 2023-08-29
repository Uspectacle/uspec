import { createStyles } from '@mantine/core';
import { Cell } from './Cell';
import useGameState from './useGameState';

export const Game = () => {
  const { sizeGrid, grid, computeProb, isOver } = useGameState();
  const { classes } = useStyles({ sizeGrid });

  return (
    <div className={classes.background}>
      <div className={classes.grid}>
        {grid.map((cell, index) => (
          <Cell
            cell={cell}
            showProb={computeProb}
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
