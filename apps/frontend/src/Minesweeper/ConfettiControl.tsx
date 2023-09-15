import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'usehooks-ts';
import useMinesweeperState from './Store/useMinesweeperState';

export const ConfettiControl = ({ active }: { active: boolean }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [init, setInit] = useState(false);
  const { width, height } = useWindowSize();
  const { current } = useMinesweeperState();
  const { isWon } = current;
  let timer: NodeJS.Timeout | undefined;

  useEffect(() => {
    if (isWon && active) {
      setInit(true);
      setShowConfetti(isWon);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setShowConfetti(false), 1000);
    }
    return;
  }, [isWon]);

  return init ? (
    <Confetti width={width} height={height} recycle={showConfetti} />
  ) : (
    <></>
  );
};
