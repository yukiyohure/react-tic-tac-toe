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
      isCircleTurn: true,
      cells: new Array(9).fill(''), // 空文字判定関数のisEmptyStringのために空文字で埋めておく
      turnCount: 0,
    };
    this.circle = '○';
    this.cross = '×';
    this.winnigPerttern = [
      // row
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // column
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonal
      [0, 4, 8],
      [2, 4, 6]
    ];
  };

  // arrow functionにすることでthisを固定
  handleClick = (e) => {
    const indexOfCell = e.currentTarget.dataset.cell;
    // セルの中身が空の場合のみ処理を進める = 一度markが入ったセルはクリックできないようにする
    if (this.isEmptyString(this.state.cells[indexOfCell])) {
      this.insertMark(indexOfCell);
      this.toggleTurn();
      this.checkWin();
      this.countTurn();
    };
  };

  // 経過ターン数をカウント(引き分けを判定するための材料になる)
  countTurn = () => {
    this.setState({
      turnCount: this.state.turnCount + 1 // [issue] 1手目で1にならずに0のまま。2手目から1になる。
    });
  };

  // セルがクリックされたらターンを変更(○ ⇄ ×)
  toggleTurn = () => {
    this.setState({
      isCircleTurn: !this.state.isCircleTurn // stateの'isCircleTurn'の値を変更する
    });
  };

  // cellに '◯' or '×' を挿入
  insertMark = (indexOfCell) => {
    // 配列のstateを変更するには、一度変更前のstateの配列をコピーし更新したものをstateに渡す。
    const cellsCopy = this.state.cells;
    const sign = this.state.isCircleTurn ? this.circle : this.cross;

    cellsCopy[indexOfCell] = sign;

    // コピーを更新したものをstateに渡す
    this.setState({
      cells: cellsCopy
    });
  };

  // 引数の文字列が空文字かの判定
  isEmptyString = (string) => {
    return typeof string === 'string' && string.length === 0;
  }

  // 勝者を判定
  checkWin = () => {
    const cellsCopy = this.state.cells;
    const player = this.state.isCircleTurn ? this.circle : this.cross;

    const judge = this.winnigPerttern.some((pattern) => {
      const [first, second, third] = pattern;
      const firstMark = cellsCopy[first];
      const secondMark = cellsCopy[second];
      const thirdMark = cellsCopy[third];
      return firstMark && firstMark === secondMark && firstMark === thirdMark;
    });

    if (judge) {
      this.setState({
        stateMessage: `${player} win!`
      });
    }
  }

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
                <Display isCircle={this.state.isCircleTurn} />
                <Table onClick={this.handleClick} cells={this.state.cells} />
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
