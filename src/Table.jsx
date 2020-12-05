import React from 'react';
import styled from 'styled-components';

const Table = () => {
  const TableBackground = styled.table`
    background: #000;
  `;

  const TableCell = styled.td`
    background: #fff;
    padding: 1px;
    width: 3rem;
    height: 3rem;
  `;

  return (
    <div>
      <TableBackground>
        <tbody>
          <tr>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </tr>
          <tr>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </tr>
          <tr>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </tr>
        </tbody>
      </TableBackground>
    </div>
  );
};


export default Table;