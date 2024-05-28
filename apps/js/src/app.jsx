import { Game } from "./game";
import { Layout, GameHelp } from "./app.styles";

export const App = () => (
  <Layout>
    <Game />
    <GameHelp>
      <h1>Connect 4</h1>
      <h2>How to play</h2>
      <p>
        This is a two player game. Each player takes turns to enter a coloured
        counter into the grid. The first player to connect 4 of their counters
        in a horizontal, vertical or diagonal line is the winner!
      </p>
    </GameHelp>
  </Layout>
);

export default App;
