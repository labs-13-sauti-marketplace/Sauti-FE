import React from 'react';
import './App.css';
import Title from './components/Title/Title.js'
import Nav from './components/Nav/Nav.js';
import Board from './components/Board/Board.js'

function App() {
  return (
    <div className="App">
      <header className="App-Navbar">
        <Title />
      </header>

      <div className="container-fluid nav-board">

        <Nav />

        <Board />
      </div>
    </div>
  );
}

export default App;
