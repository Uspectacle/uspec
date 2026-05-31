import React from 'react';
import { NumberInput } from './NumberInput';
import { useDispatch } from 'react-redux';
import { setMineNum, setSizeGrid } from './Store/minesweeperStateStore';
import useMinesweeperState from './Store/useMinesweeperState';

export const Settings = () => {
  const dispatch = useDispatch();
  const { sizeGrid, mineNum } = useMinesweeperState().current;

  return (
    <>
      <h1>Settings</h1>
      <h2>Size of the grid</h2>
      <NumberInput
        initialValue={sizeGrid}
        min={5}
        max={50}
        onValueChange={(value) => {
          dispatch(setSizeGrid(value));
        }}
      />
      <h2>Number of mines</h2>
      <NumberInput
        initialValue={mineNum}
        min={1}
        max={sizeGrid * sizeGrid - 9}
        onValueChange={(value) => {
          dispatch(setMineNum(value));
        }}
      />
    </>
  );
};
