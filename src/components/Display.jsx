import React from 'react';
import styled from 'styled-components';

const Turn = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 1rem 1rem 1rem;
  `;

const Circle = styled.div`
    padding: .5rem 1rem;
    font-size: 1.2rem;
    border-bottom: ${props => props.isCircle ? '3px solid #000' : '0px'};
  `;

const Cross = styled.div`
    padding: .5rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: ${props => props.isCircle ? '0px' : '3px solid #000'};
  `;

// "props"と毎回書くのが面倒な場合、分割代入でpropsの中身を任意の名前の変数に入れてあげる
const Display = ({isCircle}) => {
  return (
    <Turn>
      <Circle isCircle={isCircle}>○</Circle>
      <Cross isCircle={isCircle}>×</Cross>
    </Turn>
  );
};

export default Display;