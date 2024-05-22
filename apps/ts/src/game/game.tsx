import { GridCell, GridColumn } from "./components";
import { Grid } from "./game.styles";

export const Game = () => {
  return (
    <div>
      <Grid>
        <GridColumn
          handleClick={() => {
            console.log("column 1 clicked");
          }}
        >
          <GridCell />
          <GridCell counter="yellow" />
        </GridColumn>
        <GridColumn
          handleClick={() => {
            console.log("column 2 clicked");
          }}
        >
          <GridCell />
          <GridCell counter="red" />
        </GridColumn>
      </Grid>
      <p>Current player: TODO</p>
      <p>Winner: TODO</p>
      <button>Start new game</button>
    </div>
  );
};
