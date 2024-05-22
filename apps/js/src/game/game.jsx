import { GameHelp, Grid, GridCell, GridColumn, Layout } from "./game.styles";

export const Game = () => {
  const rows = [...Array(6).keys()];
  const columns = [...Array(7).keys()];

  return (
    <div>
      <Grid>
        {columns.map((columnId) => (
          <GridColumn
            key={`col-${columnId}`}
            onClick={() => {
              console.log("column clicked");
            }}
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
      <p>Current player: TODO</p>
      <p>Winner: TODO</p>
      <button>Start new game</button>
    </div>
  );
};
