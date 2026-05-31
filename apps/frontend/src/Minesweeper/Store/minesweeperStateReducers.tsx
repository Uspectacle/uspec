import { GameState, MinesweeperState } from './minesweeperStateStore';
import { CellType } from '../CellType';
import { updateProb } from './UpdateProb';

const initCell = (
  index: number,
  sizeGrid: number,
  mineNum: number
): CellType => ({
  row: Math.floor(index / sizeGrid),
  column: index % sizeGrid,
  index,
  isMine: false,
  prob: Math.min(mineNum, sizeGrid * sizeGrid - 1) / (sizeGrid * sizeGrid),
  num: 0,
  isShown: false,
  isFlag: false,
  neighbors: [],
  initDate: new Date().toISOString(),
});

const initGrid = (sizeGrid: number, mineNum: number): CellType[] => {
  const preGrid = Array.from({ length: sizeGrid * sizeGrid }, (_, index) =>
    initCell(index, sizeGrid, mineNum)
  );
  return preGrid.map((cell) => {
    const neighboringCells = preGrid.filter((otherCell) => {
      return (
        Math.abs(cell.column - otherCell.column) < 2 &&
        Math.abs(cell.row - otherCell.row) < 2
      );
    });
    cell.neighbors = neighboringCells.map((cell) => cell.index);
    return cell;
  });
};

const shuffle = (anyArray: number[]) => {
  for (let i = anyArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [anyArray[i], anyArray[j]] = [anyArray[j], anyArray[i]];
  }
};

const setSizeGrid = (
  state: MinesweeperState,
  value: { payload: number; type: string }
) => {
  if (state.current.sizeGrid !== value.payload) {
    state.current.sizeGrid = value.payload;
    restart(state);
  }
};

const setMineNum = (
  state: MinesweeperState,
  value: { payload: number; type: string }
) => {
  if (state.current.mineNum !== value.payload) {
    state.current.mineNum = value.payload;
    restart(state);
  }
};

const restart = (state: MinesweeperState) => {
  state.current.isMine = false;
  state.current.isOver = false;
  state.current.isWon = false;
  state.gameStates = [state.current];
  state.currentIndex = 0;
  state.current.grid = initGrid(state.current.sizeGrid, state.current.mineNum);
};

const gameOver = (state: MinesweeperState) => {
  state.current.isOver = true;
  state.current.grid.forEach((cell) => {
    if (!cell.isFlag || cell.isMine) cell.isShown = true;
  });
};

const flag = (
  state: MinesweeperState,
  value: { payload: number; type: string }
) => {
  const index = value.payload;
  if (state.current.grid[index].isShown) return;
  state.current.grid[index].isFlag = !state.current.grid[index].isFlag;
};

const dig = (
  state: MinesweeperState,
  value: { payload: number; type: string }
) => {
  const index = value.payload;

  if (state.current.grid[index].isFlag) return;
  if (state.current.grid[index].isShown) return;

  state.current.grid[index].isShown = true;

  if (!state.current.isMine) {
    // INIT MINES
    const indexList = state.current.grid
      .map((_, otherIndex) => otherIndex)
      .filter(
        (otherIndex) =>
          !state.current.grid[index].neighbors.includes(otherIndex)
      );

    shuffle(indexList);

    indexList
      .slice(
        0,
        Math.min(
          state.current.mineNum,
          state.current.sizeGrid * state.current.sizeGrid - 1
        )
      )
      .forEach((otherIndex) => {
        state.current.grid[otherIndex].isMine = true;
      });

    state.current.grid = state.current.grid.map((cell) => {
      cell.neighbors.forEach((otherIndex) => {
        if (state.current.grid[otherIndex].isMine) cell.num += 1;
      });
      return cell;
    });

    state.current.isMine = true;
  }

  if (state.current.grid[index].isMine) {
    gameOver(state); // LOOSE
    return;
  }

  if (
    state.current.grid.every((cell) => {
      return (cell.isShown && !cell.isMine) || (!cell.isShown && cell.isMine);
    })
  ) {
    state.current.grid.forEach((cell) => {
      if (!cell.isFlag && cell.isMine) cell.isFlag = true;
    });
    state.current.isWon = true;
    gameOver(state); // WIN
    return;
  }

  if (state.current.grid[index].num === 0) {
    state.current.grid[index].neighbors.forEach((otherIndex) =>
      dig(state, { payload: otherIndex, type: value.type })
    );
  }
};

const neighborsCheck = (
  state: MinesweeperState,
  value: { payload: number; type: string }
) => {
  const index = value.payload;

  if (!state.current.grid[index].isShown) return;

  const neighborsCount = state.current.grid[index].neighbors.reduce(
    (count, otherIndex) => {
      if (state.current.grid[otherIndex].isFlag) count.flag += 1;
      if (!state.current.grid[otherIndex].isShown) count.cover += 1;
      return count;
    },
    { flag: 0, cover: 0 }
  );

  if (neighborsCount.flag === state.current.grid[index].num) {
    state.current.grid[index].neighbors.forEach((otherIndex) =>
      dig(state, { payload: otherIndex, type: value.type })
    );
  }

  if (neighborsCount.cover === state.current.grid[index].num) {
    state.current.grid[index].neighbors.forEach((otherIndex) => {
      if (
        !state.current.grid[otherIndex].isShown &&
        !state.current.grid[otherIndex].isFlag
      ) {
        flag(state, { payload: otherIndex, type: value.type });
      }
    });
  }
};

const isSameGameState = (gameState: GameState, otherGameState: GameState) => {
  if (!otherGameState) return false;
  return !gameState.grid.find((cell, index) => {
    const otherCell = otherGameState.grid[index];
    if (cell.isShown !== otherCell.isShown) return true;
    if (cell.isFlag !== otherCell.isFlag) return true;
    return false;
  });
};

const saveState = (state: MinesweeperState) => {
  if (isSameGameState(state.current, state.gameStates[state.currentIndex])) {
    return;
  }
  state.gameStates = state.gameStates.slice(state.currentIndex);
  state.gameStates.unshift(state.current);
  state.currentIndex = 0;
};

const setCurrentIndex = (
  state: MinesweeperState,
  value: { payload: number; type: string }
) => {
  state.currentIndex = value.payload;
  state.current = state.gameStates[state.currentIndex];
};

const playBestMove = (state: MinesweeperState) => {
  if (state.current.isOver) {
    restart(state);
    return;
  }
  const cellsNotShown = state.current.grid.filter((cell) => !cell.isShown);
  const selectedCell = cellsNotShown.reduce(
    (safestCell, cell) => (cell.prob < safestCell.prob ? cell : safestCell),
    cellsNotShown[0]
  );
  dig(state, { payload: selectedCell.index, type: 'number' });
  updateProb(state);
  saveState(state);
};

const playRandomMove = (state: MinesweeperState) => {
  if (state.current.isOver) {
    restart(state);
    return;
  }
  const cellsNotShown = state.current.grid.filter((cell) => !cell.isShown);
  const selectedCell =
    cellsNotShown[Math.floor(Math.random() * cellsNotShown.length)];
  dig(state, { payload: selectedCell.index, type: 'number' });
  updateProb(state);
  saveState(state);
};

export const minesweeperStateReducers = {
  setSizeGrid,
  setMineNum,
  restart,
  flag: (state: MinesweeperState, value: { payload: number; type: string }) => {
    flag(state, value);
    saveState(state);
  },
  dig: (state: MinesweeperState, value: { payload: number; type: string }) => {
    dig(state, value);
    updateProb(state);
    saveState(state);
  },
  neighborsCheck: (
    state: MinesweeperState,
    value: { payload: number; type: string }
  ) => {
    neighborsCheck(state, value);
    updateProb(state);
    saveState(state);
  },
  saveState,
  setCurrentIndex,
  playBestMove,
  playRandomMove,
};
