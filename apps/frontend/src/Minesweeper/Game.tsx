import { createStyles } from '@mantine/core';
import { Cell } from './Cell';
import useGameState from './useGameState';

export const Game = () => {
  const { sizeGrid, grid, computeProb, isOver } = useGameState();
  const { classes } = useStyles({ sizeGrid });

  return (
    <div className={classes.background} id="background" tabIndex={0}>
      <div className={classes.grid}>
        {grid.map((cell, index) => (
          <Cell
            cell={cell}
            computeProb={computeProb}
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
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    justifyContent: 'space-around',
    alignItems: 'center',
    aspectRatio: '1',
    maxWidth: '100%',
    maxHeight: '100%',
    '& > span': {
      color: '#b38c78',
      fontSize: '30px',
    },
  },
  grid: {
    padding: 10,
    margin: 10,
    display: 'grid',
    gridTemplateColumns: `repeat(${sizeGrid}, 1fr)`,
    flex: 1,
    aspectRatio: '1',
  },
}));
