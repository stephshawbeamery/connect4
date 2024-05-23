import { useCallback } from 'react';
import { useConnect4 } from './use-connect4';
import { Grid, GridCell, GridColumn, Layout } from "./game.styles";
import { Help } from './help';

export const Game = () => {
  const { board } = useConnect4();

  const onColumnClick = useCallback((index: number) => {
    alert(`You clicked on column ${index}`);
  }, []);

  return (
    <Layout>
      <Grid>
        {board.map((column, index) => (
          <GridColumn
            key={`col-${index}`}
            data-column={index}
            onClick={() => onColumnClick(index)}
          >
            {column.map((cell) => {
              const { player, coordinates } = cell;
              const [y, x] = coordinates;

              return (
                <GridCell
                  key={`cell-${y}-${x}`}
                  data-coords-column={y}
                  data-coords-row={x}
                  data-player={player}
                  player={player}
                />
              )
            })}
          </GridColumn>
        ))}
      </Grid>

      <Help />
    </Layout>
  );
};
