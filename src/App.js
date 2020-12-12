import Title from './components/Title';
import Display from './components/Display';
import Table from './components/Table';
import StateMessage from './components/StateMessage';
import RestartButton from './components/RestartButton';
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
      isGameContinued: true,
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
    this.maxTurn = 8;
    // thisをconstructorで束縛する。
    // onClickで呼び出すときにarrow関数を使って束縛することもできるが、
    // 子コンポーネントに渡す関数の場合、子コンポーネントも無駄に再描画されてしまう。
    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleRestartButtonClick = this.handleRestartButtonClick.bind(this);
  };

  // リスタート処理
  handleRestartButtonClick = () => {
    this.setState({
      turnCount: 0,
      cells: new Array(9).fill(''),
      stateMessage: 'starting...',
      isGameContinued: true,
      isCircleTurn: true,
    });
  }

  // arrow functionにすることでthisを固定
  handleCellClick = (e) => {
    const indexOfCell = e.currentTarget.dataset.cell;
    // セルの中身が空の場合 & ゲームが終了していない場合に処理を進める
    // つまり、 一度markが入ったセルはクリックできないようにする & ゲームが終わったらクリックできないようにする
    if ( this.isEmptyString(this.state.cells[indexOfCell]) && this.state.isGameContinued ) {
      this.insertMark(indexOfCell);
      this.toggleTurn();
      this.calculateWinner();
      this.countTurn();
      this.checkDraw();
    };
  };

  checkDraw = () => {
    if (this.state.turnCount === this.maxTurn) {
      this.setState({
        stateMessage: 'draw',
      });
    }
  }

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
  calculateWinner = () => {
    const cellsCopy = this.state.cells;
    const player = this.state.isCircleTurn ? this.circle : this.cross;

    const hasWon = this.winnigPerttern.some((pattern) => {
      const [first, second, third] = pattern;
      return cellsCopy[first] && cellsCopy[first] === cellsCopy[second] && cellsCopy[first] === cellsCopy[third];
    });

    // 勝者が決まった場合
    if (hasWon) {
      this.setState({
        stateMessage: `${player} win!`,
        isGameContinued: false,
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
                <Table onClick={this.handleCellClick} cells={this.state.cells} />
              </main>
              <Footer>
                <StateMessage message={this.state.stateMessage} />
                <RestartButton onClick={this.handleRestartButtonClick} />
              </Footer>
            </div>
          </Wrapper>
        </>
    );
  }
}

export default App;
