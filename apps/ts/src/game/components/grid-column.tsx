import styled from "styled-components";
type GridColumnProps = {
  handleClick: () => void;
};

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

export const GridColumn = ({
  handleClick,
  children,
}: React.PropsWithChildren<GridColumnProps>) => (
  <GridColumnStyle onClick={handleClick}>{children}</GridColumnStyle>
);
