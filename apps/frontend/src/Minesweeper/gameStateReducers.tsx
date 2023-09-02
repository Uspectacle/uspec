import { GameStateState } from './gameStateStore';
import { CellType } from './cellType';
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

export const initGrid = (sizeGrid: number, mineNum: number): CellType[] => {
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

const setGrid = (
  state: GameStateState,
  value: { payload: CellType[]; type: string }
) => {
  state.grid = value.payload;
};

const setIsMine = (
  state: GameStateState,
  value: { payload: boolean; type: string }
) => {
  state.isMine = value.payload;
};

const setIsOver = (
  state: GameStateState,
  value: { payload: boolean; type: string }
) => {
  state.isOver = value.payload;
};

const setSizeGrid = (
  state: GameStateState,
  value: { payload: number; type: string }
) => {
  state.sizeGrid = value.payload;
  restart(state);
};

const setMineRatio = (
  state: GameStateState,
  value: { payload: number; type: string }
) => {
  state.mineRatio = value.payload;
  state.mineNum = Math.round(value.payload * state.sizeGrid * state.sizeGrid);
  restart(state);
};

const restart = (state: GameStateState) => {
  state.isMine = false;
  state.isOver = false;
  state.mineNum = Math.round(state.mineRatio * state.sizeGrid * state.sizeGrid);
  state.grid = initGrid(state.sizeGrid, state.mineNum);
};

const gameOver = (state: GameStateState) => {
  state.isOver = true;
  state.grid.forEach((cell) => {
    if (!cell.isFlag || cell.isMine) cell.isShown = true;
  });
};

const flag = (
  state: GameStateState,
  value: { payload: number; type: string }
) => {
  const index = value.payload;
  if (state.grid[index].isShown) return;
  state.grid[index].isFlag = !state.grid[index].isFlag;
};

const dig = (
  state: GameStateState,
  value: { payload: number; type: string }
) => {
  const index = value.payload;

  if (state.grid[index].isFlag) return;
  if (state.grid[index].isShown) return;

  state.grid[index].isShown = true;

  if (!state.isMine) {
    // INIT MINES
    const indexList = state.grid
      .map((_, otherIndex) => otherIndex)
      .filter(
        (otherIndex) => !state.grid[index].neighbors.includes(otherIndex)
      );

    shuffle(indexList);

    indexList
      .slice(0, Math.min(state.mineNum, state.sizeGrid * state.sizeGrid - 1))
      .forEach((otherIndex) => {
        state.grid[otherIndex].isMine = true;
      });

    state.grid = state.grid.map((cell) => {
      cell.neighbors.forEach((otherIndex) => {
        if (state.grid[otherIndex].isMine) cell.num += 1;
      });
      return cell;
    });

    state.isMine = true;
  }

  if (state.grid[index].isMine) {
    gameOver(state); // LOOSE
    return;
  }

  if (
    state.grid.every((cell) => {
      return (cell.isShown && !cell.isMine) || (!cell.isShown && cell.isMine);
    })
  ) {
    state.grid.forEach((cell) => {
      if (!cell.isFlag && cell.isMine) cell.isFlag = true;
    });
    gameOver(state); // WIN
    return;
  }

  if (state.grid[index].num === 0) {
    state.grid[index].neighbors.forEach((otherIndex) =>
      dig(state, { payload: otherIndex, type: value.type })
    );
  }

  updateProb(state);
};

const neighborsCheck = (
  state: GameStateState,
  value: { payload: number; type: string }
) => {
  const index = value.payload;

  if (!state.grid[index].isShown) return;

  const neighborsCount = state.grid[index].neighbors.reduce(
    (count, otherIndex) => {
      if (state.grid[otherIndex].isFlag) count.flag += 1;
      if (!state.grid[otherIndex].isShown) count.cover += 1;
      return count;
    },
    { flag: 0, cover: 0 }
  );

  if (neighborsCount.flag === state.grid[index].num) {
    state.grid[index].neighbors.forEach((otherIndex) =>
      dig(state, { payload: otherIndex, type: value.type })
    );
  }

  if (neighborsCount.cover === state.grid[index].num) {
    state.grid[index].neighbors.forEach((otherIndex) => {
      if (!state.grid[otherIndex].isShown && !state.grid[otherIndex].isFlag) {
        flag(state, { payload: otherIndex, type: value.type });
      }
    });
  }
};

export const gameStateReducers = {
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
};
