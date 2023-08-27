import React from 'react';
import SegmentedControl from './SegmentedControl';
import { useDispatch } from 'react-redux';
import useGameState from './useGameState';
import { MINE } from './MinesweeperStyle';
import { setMineRatio } from './gameStateStore';

export const SetMineControl = () => {
  const dispatch = useDispatch();
  const { mineRatio, sizeGrid } = useGameState();

  return (
    <SegmentedControl
      value={mineRatio}
      onChange={(value) => {
        dispatch(setMineRatio(value));
      }}
      data={[
        {
          id: 1,
          label: `${Math.round(sizeGrid * sizeGrid * (4 / 25))} ${MINE}`,
          value: 4 / 25,
        },
        {
          id: 2,
          label: `${Math.round(sizeGrid * sizeGrid * (7 / 25))} ${MINE}`,
          value: 7 / 25,
        },
        {
          id: 3,
          label: `${Math.round(sizeGrid * sizeGrid * (10 / 25))} ${MINE}`,
          value: 10 / 25,
        },
      ]}
    />
  );
};
