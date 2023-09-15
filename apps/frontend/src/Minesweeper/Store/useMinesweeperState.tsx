import { RootState } from '../../Utils/Store';
import { useSelector } from 'react-redux';
import { MinesweeperState } from './minesweeperStateStore';

const useMinesweeperState = (): MinesweeperState => {
  const minesweeperState: MinesweeperState = useSelector(
    (state: RootState) => state.minesweeperStateStore
  );
  return minesweeperState;
};

export default useMinesweeperState;
