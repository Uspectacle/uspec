import { CellType } from '../CellType';
import { MinesweeperState } from './minesweeperStateStore';

const precision = 10 ** -3;
const h = 10 ** -3;
const minPower = 10 ** -3;
const maxPower = 10 ** +3;
const step = 300;

const derivative = (f: (x: number) => number) => (x: number) =>
  (f(x + h) - f(x - h)) / (2 * h);

const clamp = (x: number) =>
  x < minPower ? minPower : x > maxPower ? maxPower : x;

const newtonsMethod = (
  f: (x: number) => number,
  guess: number = 1,
  prevGuess: number = 0,
  numGuess: number = 10
): number => {
  if (Math.abs(prevGuess - guess) < precision || numGuess <= 0) return guess;
  const df_guess = derivative(f)(guess);
  const newGuess = df_guess ? clamp(guess - f(guess) / df_guess) : maxPower;
  return newtonsMethod(f, newGuess, guess, numGuess - 1);
};

interface Equation {
  cellIndexes: number[];
  numberOfMines: number;
}

const getEquations = (grid: CellType[], mineNum: number): Equation[] => [
  {
    cellIndexes: grid.map((cell) => cell.index),
    numberOfMines: mineNum,
  },
  ...grid
    .filter((cell) => cell.isShown)
    .map((cell) => ({
      cellIndexes: cell.neighbors.filter(
        (cellIndex) => cellIndex !== cell.index
      ),
      numberOfMines: cell.num,
    })),
];

const difference = (
  probabilities: number[],
  { cellIndexes, numberOfMines }: Equation,
  power: number = 1
) =>
  cellIndexes.reduce(
    (partialDifference, cellIndex) =>
      partialDifference + probabilities[cellIndex] ** power,
    -numberOfMines
  );

const solveEquations = (probabilities: number[], equations: Equation[]) => {
  equations.forEach((equation) => {
    const power = newtonsMethod((_power: number) =>
      difference(probabilities, equation, _power)
    );
    // console.log(index, 'power', power);
    equation.cellIndexes.forEach(
      (cellIndex) =>
        (probabilities[cellIndex] = probabilities[cellIndex] ** power)
    );
  });
};

export const updateProb = (state: MinesweeperState) => {
  // console.log('updateProb');
  const { grid, mineNum } = state.current;
  const probabilities = grid.map((cell) =>
    cell.isShown && !cell.isMine ? 0 : 0.5
  );
  const equations = getEquations(grid, mineNum);
  // console.log('equations', equations);
  // console.log('probabilities', probabilities);
  for (let k = 0; k < step; k++) solveEquations(probabilities, equations);
  // const error = equations.reduce(
  //   (partialError, equation) =>
  //     difference(probabilities, equation) + partialError,
  //   0
  // );
  // console.log('error', error);
  grid.forEach((cell) => (cell.prob = probabilities[cell.index]));
};
