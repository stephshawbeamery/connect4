import { Player, GameConfig, GameState, GridState } from "../types/game";

export const calculateMoveResult = (
  gridState: GridState,
  config: GameConfig
): Player | "draw" | undefined => {
  throw new Error("Not implemented");
  return undefined;
};

export const createNewGameState = (config: GameConfig): GameState => {
  throw new Error("Not implemented");
};
