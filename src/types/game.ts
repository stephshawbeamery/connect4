export type CellState = Player | null;
export type GridState = CellState[][];
export type Cell = [number, number];

export type GameConfig = {
  columnCount: number;
  rowCount: number;
  sequenceLength: number;
};

export type GameState = {
  gridState: GridState;
  currentPlayer: Player;
  winner?: Player | "draw";
  winningSequences?: Cell[];
};

export enum Player {
  PlayerOne = "Player 1",
  PlayerTwo = "Player 2",
}
