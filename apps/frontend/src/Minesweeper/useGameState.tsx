import { RootState } from '../Utils/Store';
import { useSelector } from 'react-redux';
import { GameStateState } from './gameStateStore';

const useGameState = (): GameStateState => {
  const gameState: GameStateState = useSelector(
    (state: RootState) => state.gameStateStore
  );
  return gameState;
};

export default useGameState;
