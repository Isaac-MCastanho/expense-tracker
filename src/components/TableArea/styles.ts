import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 5px #ccc;
  border-radius: 10px;
  margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  padding: 10px 0;
  text-align: left;
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};

  @media (min-width: 800px) {
    margin: auto;
    width: 200px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;
