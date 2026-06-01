'use client';

import type React from 'react';
import { useEffect, useState } from 'react';
import styles from './Background.module.css';
import { RandomCircle } from './RandomCircle';

export const Background = ({ length }: { length: number }) => {
  const [circles, setCircles] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    setCircles(
      // biome-ignore lint/suspicious/noArrayIndexKey: Circles are defined by their index
      Array.from({ length }, (_, index) => <RandomCircle key={index} />),
    );
  }, [length]);

  return <div className={styles.container}>{circles}</div>;
};
