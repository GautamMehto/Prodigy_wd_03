import React from 'react';
import Board from './Components/Board';
import Background from './Components/Background';

function App() {
  return (
    <div className="App overflow-hidden relative">
      <Background/>
      <Board />
    </div>
  );
}

export default App;