import React from 'react';
import { useMinesweeperStyles } from './MinesweeperStyle';
import { MyImage } from '../Utils/MyImage';

export const NextButton = ({
  page,
  setPage,
}: {
  page: number;
  setPage: (page: number) => void;
}) => {
  const { classes } = useMinesweeperStyles();
  return (
    <div
      className={classes.button}
      onClick={() => setPage(Math.max(0, page + 1))}
    >
      Next
      <MyImage
        src="/svg/chevron-arrow.svg"
        width={800}
        height={800}
        style={{ width: '1em' }}
      />
    </div>
  );
};
