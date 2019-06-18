import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navbar/Navbar.js'
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-Navbar">
        <Navigation />
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
