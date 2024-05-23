import { FC } from 'react';
import { GameHelp } from './game.styles';

export const Help: FC = () => (
  <GameHelp>
    <h1>Connect4</h1>
    <h2>How to play</h2>
    <p>
      This is a two player game. Each player takes turns to enter a coloured
      counter into the grid. The first player to connect 4 of
      their counters in a horizontal, vertical or diagonal line is the
      winner!
    </p>
    <h2>Current game</h2>
    <p>Current player: ??</p>
    <p>Winner: ??</p>
    <button>Start new game</button>
  </GameHelp>
)
