import React from 'react';
import { useMinesweeperStyles } from '../MinesweeperStyle';

export const NextButton = ({
  page,
  setPage,
  max,
  layout,
  children,
}: {
  page: number;
  setPage: (page: number) => void;
  max: number;
  layout?: string | undefined;
  children: JSX.Element;
}) => {
  const { classes } = useMinesweeperStyles();
  return (
    <div
      className={`${classes.button} ${page >= max && 'hidden'} ${layout}`}
      onClick={() => setPage(Math.min(max, page + 1))}
    >
      {children}
    </div>
  );
};
