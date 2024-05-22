import styled from "styled-components";
import { Counter } from "../../types/game";

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
  background-color: ${({ counter }: GridCellProps) =>
    counter ? counterColor[counter] : "white"};
`;
