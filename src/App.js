import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Title, Nav, Board } from './components/export.js'

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
      <div className="container nav-board">
      <Nav />
      <Route exact path="/" component={ Board }/>

      </div>
      </div>
    )
  }
}


export default App;
