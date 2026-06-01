import type React from 'react';
import styles from './Board.module.css';

export const Board = ({
  children,
}: {
  children?: React.JSX.Element | React.JSX.Element[];
}) => {
  return (
    <div className={styles.frame}>
      <div className={styles.board}>{children}</div>
    </div>
  );
};
