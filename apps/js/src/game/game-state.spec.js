import { createNewGameState } from "./game-state";

describe("game-state", () => {
  it.each([
    [6, 7],
    [3, 4],
    [100, 80],
  ])(
    "should create a game state with a %s rows and %s columns",
    (rowCount, columnCount) => {
      createNewGameState({
        rowCount,
        columnCount,
        sequenceLength: 4,
      });
    }
  );
});
