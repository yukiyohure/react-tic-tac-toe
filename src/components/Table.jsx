import React from 'react';
import styled from 'styled-components';

const TableBackground = styled.table`
    background: #000;
  `;

const TableCell = styled.td`
    background: #fff;
    padding: 1px;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    text-align: center;
    font-size: 1.5rem;
  `;

const Table = (props) => {
  return (
    <div>
      <TableBackground>
        <tbody>
          <tr>
            {/* Reactのイベント処理では、イベントが発生したとき、設定した関数を、「発生したイベントを引数にして」実行する */}
            <TableCell onClick={() => props.onClick(0)}>{props.cells[0]}</TableCell>
            <TableCell onClick={() => props.onClick(1)}>{props.cells[1]}</TableCell>
            <TableCell onClick={() => props.onClick(2)}>{props.cells[2]}</TableCell>
          </tr>
          <tr>
            <TableCell onClick={() => props.onClick(3)}>{props.cells[3]}</TableCell>
            <TableCell onClick={() => props.onClick(4)}>{props.cells[4]}</TableCell>
            <TableCell onClick={() => props.onClick(5)}>{props.cells[5]}</TableCell>
          </tr>
          <tr>
            <TableCell onClick={() => props.onClick(6)}>{props.cells[6]}</TableCell>
            <TableCell onClick={() => props.onClick(7)}>{props.cells[7]}</TableCell>
            <TableCell onClick={() => props.onClick(8)}>{props.cells[8]}</TableCell>
          </tr>
        </tbody>
      </TableBackground>
    </div>
  );
};


export default Table;