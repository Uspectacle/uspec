import { createStyles } from '@mantine/core';
import { CellType } from '../cellType';
import { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { dig, flag, neighborsCheck } from '../Store/minesweeperStateStore';
import { SHADOW } from '../../Utils/DefaultStyle';
import { cellColor, cellFontColor, cellImage } from '../MinesweeperStyle';

interface propsType {
  cell: CellType;
  showProb: boolean;
  isOver: boolean;
}

export const Cell = ({ cell, showProb, isOver }: propsType) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const leftClick = () => {
    if (isOver) return;
    if (cell.isFlag) return;
    dispatch(cell.isShown ? neighborsCheck(cell.index) : dig(cell.index));
  };

  const rightClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    if (isOver) return;
    dispatch(cell.isShown ? neighborsCheck(cell.index) : flag(cell.index));
    return false;
  };

  return (
    <div
      className={classes.cell}
      onClick={leftClick}
      onContextMenu={rightClick}
      style={{
        backgroundColor: cellColor(cell),
        color: cellFontColor(cell),
        opacity:
          cell.isShown && cell.num === 0 && cell.isShown && !cell.isMine
            ? 0
            : 1,
      }}
    >
      {cellImage(cell, showProb)}
    </div>
  );
};

const useStyles = createStyles(() => ({
  cell: {
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'space-around',
    cursor: 'pointer',
    alignItems: 'center',
    fontWeight: 'bold',
    userSelect: 'none',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    aspectRatio: '1',
    width: '2em',
    fontSize: '20em',
    transition:
      'background-color 0.3s, opacity 0.3s, transform 0.3s, filter 0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: SHADOW,
      zIndex: 10,
      filter: `brightness(100%) !important`,
    },
    '&:active': {
      transform: 'scale(1.05)',
      zIndex: 5,
      boxShadow: SHADOW,
    },
  },
}));
