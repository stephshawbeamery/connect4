import { useState } from 'react';

export type Player = 'red' | 'yellow' | null

export type Cell = {
  player: Player,
  coordinates: [number, number]
}

type Column = Cell[]

type State = {
  board:  Column[]
}

const toEmptyCell = (x: number, y: number): Cell => ({ player: null, coordinates: [x, y] });

const toEmptyBoard = () => Array.from({ length: 7 },
  (_, x) => Array.from({ length: 6 }, (__, y) => toEmptyCell(x, y)),
)

export const useConnect4 = (): State => {
  const [board] = useState(toEmptyBoard())

  return { board };
};
