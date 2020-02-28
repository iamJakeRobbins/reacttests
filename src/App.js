import React from 'react';
import logo from './logo.svg';
import './App.css';
import SampleComponent from "./components/SampleComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          is a test
        </p>
        <SampleComponent />

      </header>
    </div>
  );
}

export default App;
