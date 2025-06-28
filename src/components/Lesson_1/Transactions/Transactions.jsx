import React from 'react';
import {
  Table,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from './Transactions.styled';

function Transactions({ transactions }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}

export default Transactions;
