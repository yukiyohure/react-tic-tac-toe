import React from 'react';
import styled from 'styled-components';

const StateMessage = (props) => {

  const StateMessageText = styled.div`
    text-align: center;
    padding: .5rem;
  `;
  return (
    <StateMessageText>
      {props.message}
    </StateMessageText>
  );
};

export default StateMessage;