import styled from "styled-components";

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
