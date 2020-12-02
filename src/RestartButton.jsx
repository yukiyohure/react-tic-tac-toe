import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  background: #fff;
  cursor: pointer;
  font-weight: bold;
  border: 2px solid #000;
  border-radius: 4px;
  padding: 4px 0;
  outline: none;
  transition: background 200ms ease, color 200ms ease;
  &:hover{
    background: #000;
    color: #fff;
  }
`;

const RestartButton = () => {
  return (
    <div>
      <Button>Restart</Button>
    </div>
  );
};

export default RestartButton;