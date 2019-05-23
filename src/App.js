import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormSelector from './FormSelector';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          width="200"
          height="200"
        />
        <FormSelector />
      </header>
    </div>
  );
}

export default App;
