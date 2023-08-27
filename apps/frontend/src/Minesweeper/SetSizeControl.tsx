import React from 'react';
import SegmentedControl from './SegmentedControl';
import { useDispatch } from 'react-redux';
import { setSizeGrid } from './gameStateStore';
import useGameState from './useGameState';

export const SetSizeControl = () => {
  const dispatch = useDispatch();
  const { sizeGrid } = useGameState();

  return (
    <SegmentedControl
      value={sizeGrid}
      onChange={(value) => {
        dispatch(setSizeGrid(value));
      }}
      data={[
        { id: 1, label: '5 x 5', value: 5 },
        { id: 2, label: '10 x 10', value: 10 },
        { id: 3, label: '15 x 15', value: 15 },
      ]}
    />
  );
};
