import React from 'react';
import { useMinesweeperStyles } from '../MinesweeperStyle';
import { MyImage } from '../../Utils/MyImage';

export const ExitButton = ({
  setFocus,
}: {
  setFocus: (focus: boolean) => void;
}) => {
  const { classes } = useMinesweeperStyles();
  return (
    <div className={classes.button} onClick={() => setFocus(false)}>
      <MyImage
        src="/svg/exit.svg"
        width={800}
        height={800}
        style={{ width: '1em', transform: 'rotate(0.5turn)' }}
      />
      Exit
    </div>
  );
};
