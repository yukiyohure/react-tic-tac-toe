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

const Display = (props) => {
  return (
    <Turn>
      <Circle isCircle={props.isCircle}>○</Circle>
      <Cross isCircle={props.isCircle}>×</Cross>
    </Turn>
  );
};

export default Display;