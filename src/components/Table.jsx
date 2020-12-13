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

// 繰り返してjsxを生成
const Table = ({onClick, cells}) => { // propsを分割代入しimmutableのまま扱える
  return (
    <div>
      <TableBackground>
        <tbody>
          {
            new Array(3).fill('').map((item, row) => {
              return <tr>
                {
                  new Array(3).fill('').map((item, col) => {
                    const index = row * 3 + col;
                    return <TableCell onClick={() => onClick(index)}>{cells[index]}</TableCell>
                })
                }
              </tr>
            })
          }
        </tbody>
      </TableBackground>
    </div>
  );
};


export default Table;