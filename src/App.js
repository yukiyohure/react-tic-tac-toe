import Title from './Title';
import Display from './Display';
import Table from './Table';
import StateMessage from './StateMessage';
import RestartButton from './RestartButton';

function App() {
  return (
    <div>
      <header>
        <Title title='Tic Tac Toe' />
      </header>
      <main>
        <Display />
        <Table />
      </main>
      <footer>
        <StateMessage message='starting...' />
        <RestartButton />
      </footer>
    </div>
  );
}

export default App;
