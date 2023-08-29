import { createStyles, keyframes } from '@mantine/core';
import { CellType } from './cellType';

export const MINESWEEPER_MAIN = '#edbd7d';
export const MINESWEEPER_MAIN_TRANSPARENT = '#e7aa5a4f';
export const MINESWEEPER_BACKGROUND = '#6A381F';
export const INVISIBLE = '#6a381f00';

export const MINE = '💣';
export const FLAG = '🚩';

export const cellColor = (cell: CellType) =>
  !cell.isShown
    ? MINESWEEPER_MAIN
    : cell.isMine
    ? '#6e0d25'
    : cell.num === 0
    ? MINESWEEPER_BACKGROUND
    : [
        INVISIBLE,
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
        INVISIBLE,
        '#5770f0',
        '#2dbe71',
        '#cb9a1c',
        '#a66afb',
        '#d74848',
        '#3cb2c2',
        '#000000',
        '#888888',
        '#ffffff',
      ][cell.num] || '#000000'
    : '#000000';

export const cellBrightness = (cell: CellType) =>
  !cell.highlight ? 100 : !cell.isShown ? 90 : cell.num === 0 ? 100 : 95;

export const cellImage = (cell: CellType, showProb: boolean) =>
  cell.isFlag
    ? FLAG
    : !cell.isShown
    ? showProb
      ? `${Math.floor(cell.prob * 100)}%`
      : ''
    : cell.isMine
    ? MINE
    : String(cell.num);

export const useMinesweeperStyles = createStyles((theme) => ({
  segmentedControl: {
    display: 'flex',
    height: '2.5em',
    backgroundColor: MINESWEEPER_MAIN_TRANSPARENT,
    borderRadius: 4,
    [theme.fn.smallerThan(750)]: {
      flexDirection: 'column',
      height: '7.5em',
    },
    [theme.fn.smallerThan(400)]: {
      flexDirection: 'row',
      height: '2.5em',
    },
  },
  segment: {
    flex: 1,
    padding: 5,
    width: '5em',
    overflow: 'hidden',
    height: '2.5em',
    fontWeight: 550,
    fontSize: '1em',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    borderRadius: 4,
    opacity: 1,
    transform: 'scale(1)',
    transition:
      'background-color 0.3s, opacity 0.3s, transform 0.3s, filter 0.3s',
    '&:hover': {
      backgroundColor: MINESWEEPER_MAIN_TRANSPARENT,
    },
    '&:active': {
      backgroundColor: MINESWEEPER_MAIN,
    },
    '&.active': {
      backgroundColor: MINESWEEPER_MAIN,
    },
    '&.hidden': {
      opacity: 0,
      transform: 'scale(0)',
    },
  },
  button: {
    width: '5em',
    height: '2.5em',
    overflow: 'hidden',
    fontWeight: 550,
    fontSize: '1em',
    padding: 5,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: MINESWEEPER_MAIN,
    cursor: 'pointer',
    textAlign: 'center',
    border: 'none',
    outline: 'none',
    borderRadius: 4,
    opacity: 1,
    transform: 'scale(1)',
    transition: 'background-color 0.3s, opacity 0.3s, transform 0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&:active': {
      filter: `brightness(110%)`,
    },
    '&.hidden': {
      opacity: 0,
      transform: 'scale(0)',
    },
    '&.blink': {
      animation: `${keyframes({
        '0%': { transform: 'rotate(0deg)' },
        '2%': { transform: 'rotate(5deg)' },
        '6%': { transform: 'rotate(-5deg)' },
        '10%': { transform: 'rotate(5deg)' },
        '14%': { transform: 'rotate(-5deg)' },
        '16%': { transform: 'rotate(0deg)' },
      })} 2s 5s infinite`,
    },
    '&.mobile': {
      [theme.fn.largerThan(750)]: {
        display: 'none',
      },
    },
    '&.desktop': {
      [theme.fn.smallerThan(750)]: {
        display: 'none',
      },
    },
  },
}));
