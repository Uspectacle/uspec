import React from 'react';
import { useMinesweeperStyles } from '../MinesweeperStyle';

export const BackButton = ({
  page,
  setPage,
  layout,
  children,
}: {
  page: number;
  setPage: (page: number) => void;
  layout?: string | undefined;
  children: JSX.Element;
}) => {
  const { classes } = useMinesweeperStyles();
  return (
    <div
      // className={`${classes.button} ${page <= 0 && 'hidden'} ${layout}`}
      className={`${classes.button} ${layout}`}
      onClick={() => setPage(Math.max(0, page - 1))}
    >
      {children}
    </div>
  );
};
