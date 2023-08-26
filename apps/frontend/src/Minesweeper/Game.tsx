import { createStyles } from '@mantine/core';
import { KeyboardEvent } from 'react';
import { Grid } from './Grid';
import { useDispatch } from 'react-redux';
import { restart } from './gameStateStore';

export const Game = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 's' || event.key === 'S') {
      dispatch(restart());
    }
  };

  return (
    <div
      className={classes.background}
      id="background"
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <Grid />
    </div>
  );
};

const useStyles = createStyles(() => ({
  background: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#6A381F',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& > span': {
      color: '#b38c78',
      fontSize: '30px',
    },
  },
}));
