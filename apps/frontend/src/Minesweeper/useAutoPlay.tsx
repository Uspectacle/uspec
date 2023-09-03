import { useDispatch } from 'react-redux';
import { playBestMove, playRandomMove } from './minesweeperStateStore';
import { useInterval } from 'usehooks-ts';

export const useAutoBestPlay = (timeInterval: number | null) => {
  const dispatch = useDispatch();
  useInterval(() => {
    dispatch(playBestMove());
  }, timeInterval);
};

export const useAutoRandomPlay = (timeInterval: number | null) => {
  const dispatch = useDispatch();
  useInterval(() => {
    dispatch(playRandomMove());
  }, timeInterval);
};
