import { GameHelp, Grid, GridCell, GridColumn, Layout } from "./game.styles";

export const Game = ({ rowCount, columnCount, sequenceLength }) => {
  const rows = [...Array(rowCount).keys()];
  const columns = [...Array(columnCount).keys()];

  const executeMove = (columnId) => {
    throw new Error("Not implemented");
  };

  return (
    <Layout>
      <Grid>
        {columns.map((columnId) => (
          <GridColumn
            key={`col-${columnId}`}
            onClick={() => executeMove(columnId)}
          >
            {rows.map((rowId) => (
              <GridCell
                key={`col-${columnId}-row-${rowId}`}
                counter={undefined}
              />
            ))}
          </GridColumn>
        ))}
      </Grid>
      <GameHelp>
        <h1>Connect {sequenceLength}</h1>
        <h2>How to play</h2>
        <p>
          This is a two player game. Each player takes turns to enter a coloured
          counter into the grid. The first player to connect {sequenceLength} of
          their counters in a horizontal, vertical or diagonal line is the
          winner!
        </p>
        <h2>Current game</h2>
        <p>Current player: ??</p>
        <p>Winner: ??</p>
        <button>Start new game</button>
      </GameHelp>
    </Layout>
  );
};
