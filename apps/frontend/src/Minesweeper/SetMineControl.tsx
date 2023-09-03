import React from 'react';
import SegmentedControl from './SegmentedControl';
import { useDispatch } from 'react-redux';
import useMinesweeperState from './useMinesweeperState';
import { MINE } from './MinesweeperStyle';
import { setMineRatio } from './minesweeperStateStore';

export const SetMineControl = () => {
  const dispatch = useDispatch();
  const { mineRatio, sizeGrid } = useMinesweeperState().current;

  return (
    <SegmentedControl
      value={mineRatio}
      onChange={(value) => {
        dispatch(setMineRatio(value));
      }}
      data={[
        {
          id: 1,
          label: `${Math.round(sizeGrid * sizeGrid * (3 / 25))} ${MINE}`,
          value: 3 / 25,
        },
        {
          id: 2,
          label: `${Math.round(sizeGrid * sizeGrid * (4 / 25))} ${MINE}`,
          value: 4 / 25,
        },
        {
          id: 3,
          label: `${Math.round(sizeGrid * sizeGrid * (5 / 25))} ${MINE}`,
          value: 5 / 25,
        },
      ]}
    />
  );
};
