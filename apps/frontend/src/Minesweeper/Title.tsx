import { createStyles } from '@mantine/core';
import React from 'react';
import { WHITE, SHADOW } from '../Utils/DefaultStyle';

export const Title = ({
  focus,
  setFocus,
}: {
  focus: boolean;
  setFocus: (focus: boolean) => void;
}) => {
  const { classes } = useStyles();
  return (
    <div
      className={classes.titleContainer}
      style={focus ? { opacity: 0 } : {}}
      onClick={() => setFocus(true)}
    >
      <div className={classes.title}>How To Sweep Mines</div>
      <div className={classes.text}>Begin</div>
    </div>
  );
};

const useStyles = createStyles(() => ({
  titleContainer: {
    backgroundColor: WHITE,
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'wrap',
    boxShadow: SHADOW,
    transition: 'opacity 0.3s, padding 0.3s, margin 0.3s',
    opacity: 1,
    cursor: 'pointer',
    '&:hover': {
      padding: 10,
      margin: 0,
    },
    '&:active': {
      boxShadow: 'none',
    },
  },
  title: { fontSize: '3em' },
  text: {},
}));
