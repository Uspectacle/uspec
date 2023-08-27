import React from 'react';
import { useMinesweeperStyles } from './MinesweeperStyle';
import { MyImage } from '../Utils/MyImage';

export const BackButton = ({
  page,
  setPage,
  layout,
}: {
  page: number;
  setPage: (page: number) => void;
  layout?: string | undefined;
}) => {
  const { classes } = useMinesweeperStyles();
  return (
    <div
      className={`${classes.button} ${page <= 0 && 'hidden'} ${layout}`}
      onClick={() => setPage(Math.max(0, page - 1))}
    >
      <MyImage
        src="/svg/chevron-arrow.svg"
        width={800}
        height={800}
        style={{ transform: 'rotate(0.5turn)', width: '1em' }}
      />
      Back
    </div>
  );
};
