import logo from './logo.svg';
import './App.css';
import Coursetitle from './Coursetitle';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Coursetitle />
      </header>
    </div>
  );
}

export default App;
