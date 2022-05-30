import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px 0;

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 5px 0;
  }
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(p) => p.color};

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 2px 5px;
  }
`;

export const Value = styled.div<{ color: string }>`
  color: ${(p) => p.color};
`;
