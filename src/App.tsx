import React, { FC } from 'react';
import Board from './components/Board';
import './App.css';

const App: FC<{ knightPosition: [number, number] }> = ({ knightPosition }) => {
  return (
    <div className="App">
      <Board knightPosition={knightPosition} />
    </div>
  );
};

export default App;
