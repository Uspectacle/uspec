import React from 'react';
import { useMinesweeperStyles } from './MinesweeperStyle';
import { MyImage } from '../Utils/MyImage';

export const NextButton = ({
  page,
  setPage,
  max,
}: {
  page: number;
  setPage: (page: number) => void;
  max: number;
}) => {
  const { classes } = useMinesweeperStyles();
  return (
    <div
      className={`${classes.button} ${page >= max && 'hidden'}`}
      onClick={() => setPage(Math.min(max, page + 1))}
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
