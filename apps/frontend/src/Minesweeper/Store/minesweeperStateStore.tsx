import { createSlice } from '@reduxjs/toolkit';
import { minesweeperStateReducers } from './minesweeperStateReducers';
import { CellType } from '../CellType';

export interface GameState {
  grid: CellType[];
  isMine: boolean;
  isOver: boolean;
  isWon: boolean;
  sizeGrid: number;
  mineNum: number;
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
  isWon: false,
  sizeGrid: 5,
  mineNum: 4,
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
  setSizeGrid,
  setMineNum,
  restart,
  flag,
  dig,
  neighborsCheck,
  saveState,
  setCurrentIndex,
  playBestMove,
  playRandomMove,
} = minesweeperStateSlice.actions;

export default minesweeperStateSlice.reducer;
