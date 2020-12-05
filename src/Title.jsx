import React from "react";
import styled from 'styled-components';

const TitleText = styled.h1`
  padding: 1rem 1rem 0 1rem;
`;

const Title = (props) => {
  return (
    <TitleText>{props.title}</TitleText>
  );
};

export default Title;