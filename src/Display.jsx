import React from 'react';
import styled from 'styled-components';

class Display extends React.Component {
  constructor() {
    super(props);
  }

  const Turn = styled.div`
    display: flex;
  `;

  render() {
    return (
      <Turn>
        <div>○</div>
        <div>×</div>
      </Turn>
    );
  };
};

export default Display;