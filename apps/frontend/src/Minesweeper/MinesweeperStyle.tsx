import { CellType } from './cellType';

export const MINESWEEPER_MAIN = '#DCAB6B';
export const MINESWEEPER_MAIN_TRANSPARENT = '#e7aa5a4f';
export const MINESWEEPER_BACKGROUND = '#6A381F';

export const cellColor = (cell: CellType) =>
  !cell.isShown
    ? '#DCAB6B'
    : cell.isMine
    ? '#6e0d25'
    : cell.num === 0
    ? '#6A381F'
    : [
        '#6A381F',
        '#6E3E20',
        '#704121',
        '#754B23',
        '#774E24',
        '#754124',
        '#733424',
        '#722725',
        '#701A25',
        '#6E0D25',
      ][cell.num] || '#774E24';

export const cellFontColor = (cell: CellType) =>
  cell.isShown
    ? [
        '#6A381F',
        '#5769f0',
        '#2dbe71',
        '#b8880f',
        '#192899',
        '#bc3838',
        '#2f9cab',
        '#000000',
        '#5e5e5e',
        '#ffffff',
      ][cell.num] || '#000000'
    : '#000000';

export const cellBrightness = (cell: CellType) =>
  !cell.highlight ? 100 : !cell.isShown ? 90 : cell.num === 0 ? 100 : 95;

export const cellImage = (cell: CellType, computeProb: boolean) =>
  cell.isFlag
    ? '🚩'
    : !cell.isShown
    ? computeProb
      ? `${Math.floor(cell.prob * 100)}%`
      : ''
    : cell.isMine
    ? '💣'
    : String(cell.num);
