import React from 'react';
import { useMinesweeperStyles } from '../MinesweeperStyle';
import { SVG } from '../../Utils/Svg';

export const ExitButton = ({
  setFocus,
}: {
  setFocus: (focus: boolean) => void;
}) => {
  const { classes } = useMinesweeperStyles();
  return (
    <div className={classes.button} onClick={() => setFocus(false)}>
      <SVG.Exit style={{ width: '1em', transform: 'rotate(0.5turn)' }} />
      Exit
    </div>
  );
};
