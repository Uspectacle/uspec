import { createSlice } from '@reduxjs/toolkit';
import { gameStateReducers } from './gameStateReducers';
import { CellType } from './cellType';

export interface GameStateState {
  grid: CellType[];
  isMine: boolean;
  isOver: boolean;
  sizeGrid: number;
  mineNum: number;
  mineRatio: number;
}

const initialState = {
  grid: [],
  isMine: false,
  isOver: false,
  sizeGrid: 5,
  mineNum: 4,
  mineRatio: 4 / 25,
};

export const gameStateSlice = createSlice({
  name: 'gameState',
  initialState,
  reducers: gameStateReducers,
});

// Action creators are generated for each case reducer function
export const {
  setGrid,
  setIsMine,
  setIsOver,
  setSizeGrid,
  setMineRatio,
  restart,
  gameOver,
  flag,
  dig,
  neighborsCheck,
} = gameStateSlice.actions;

export default gameStateSlice.reducer;
