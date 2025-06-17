import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 40px 0;
  font-size: 1rem;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.thead`
  background-color: #f0eeee;
  color: #333;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #f0f0f0;
  }
`;
export const TableHeaderCell = styled.th`
  padding: 12px 15px;
  border-bottom: 2px solid #ddd;
`;
export const TableCell = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
  color: #555;

  &:first-child {
    font-weight: bold;
  }
`;
