import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ipcRenderer } from './Electron';

function buttonClicked() {
  ipcRenderer.send("onButtonClick")
  console.log('Button was clicked!')
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={buttonClicked}>Button</button>
    </div>
  );
}

export default App;
