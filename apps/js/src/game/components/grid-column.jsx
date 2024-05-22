import styled from "styled-components";

const GridColumnStyle = styled.button`
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

export const GridColumn = ({ handleClick, children }) => (
  <GridColumnStyle onClick={handleClick}>{children}</GridColumnStyle>
);
