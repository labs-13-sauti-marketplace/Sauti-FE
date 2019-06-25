import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Title from './components/Title/Title.js'
import Nav from './components/Nav/Nav.js';
import Board from './components/Board/Board.js'

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {

      }
    }

    render() {
    return(
      <div className="App">
        <header className="App-Navbar">
          <Title />
        </header>
        <div className="container-fluid nav-board">
          <Nav />
          <Route exact path="/" component={ Board }/>
        </div>
      </div>
    )
    }
  }


export default App;
