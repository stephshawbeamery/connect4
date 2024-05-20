import styled from "styled-components";
import { Counter } from "../types/game";

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 20px;
  gap: 50px;
`;

export const Grid = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  background-color: #cccccc;
  border-radius: 20px;
  padding: 10px;
  gap: 2px;
`;

export const GridColumn = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 20px;
  border: 2px solid transparent;
  padding: 10px 0;

  &:hover {
    border-color: black;
  }
`;

type GridCellProps = {
  counter?: Counter;
};

const counterColor: Record<Counter, string> = {
  red: "#a61414",
  yellow: "#dbb700",
};

export const GridCell = styled.div<GridCellProps>`
  height: 60px;
  width: 60px;
  margin: 5px;
  border-radius: 50%;
  background-color: ${({ counter }) =>
    counter ? counterColor[counter] : "white"};
`;

export const GameHelp = styled.div`
  width: 400px;
`;
