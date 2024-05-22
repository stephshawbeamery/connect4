import styled from "styled-components";

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
  flex-direction: column;
  border-radius: 20px;
  border: 2px solid transparent;
  padding: 10px 0;

  &:hover {
    border-color: black;
  }
`;

const counterColor = {
  red: "#a61414",
  yellow: "#dbb700",
};

export const GridCell = styled.div`
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
