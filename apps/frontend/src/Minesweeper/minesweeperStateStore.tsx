import { createSlice } from '@reduxjs/toolkit';
import { minesweeperStateReducers } from './minesweeperStateReducers';
import { CellType } from './cellType';

export interface GameState {
  grid: CellType[];
  isMine: boolean;
  isOver: boolean;
  sizeGrid: number;
  mineNum: number;
  mineRatio: number;
}

export interface MinesweeperState {
  currentIndex: number;
  gameStates: GameState[];
  current: GameState;
}

const initialGameState: GameState = {
  grid: [],
  isMine: false,
  isOver: false,
  sizeGrid: 5,
  mineNum: 4,
  mineRatio: 4 / 25,
};

const initialState: MinesweeperState = {
  currentIndex: 0,
  gameStates: [initialGameState],
  current: initialGameState,
};

export const minesweeperStateSlice = createSlice({
  name: 'minesweeperState',
  initialState: initialState,
  reducers: minesweeperStateReducers,
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
  saveState,
  setCurrentIndex,
} = minesweeperStateSlice.actions;

export default minesweeperStateSlice.reducer;
