import Title from './Title';
import Display from './Display';
import Table from './Table';
import StateMessage from './StateMessage';
import RestartButton from './RestartButton';
import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const Footer = styled.footer`
  padding: 1rem;
`;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stateMessage: 'starting...',
      isCircle: true,
    };
  };

  render() {
    return (
        <>
        <Wrapper>
          <GlobalStyle />
          <div>
            <header>
              <Title title='Tic Tac Toe' />
            </header>
            <main>
              <Display isCircle={this.state.isCircle} />
              <Table />
            </main>
            <Footer>
              <StateMessage message={this.state.stateMessage} />
              <RestartButton />
            </Footer>
          </div>
        </Wrapper>
        </>
    );
  }
}

export default App;
