import React from 'react';
import styled from 'styled-components';

const StateMessageText = styled.div`
    text-align: center;
    padding: .5rem;
  `;

const StateMessage = (props) => {
  return (
    <StateMessageText>
      {props.message}
    </StateMessageText>
  );
};

export default StateMessage;