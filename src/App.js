import React from 'react';
import logo from './logo.svg';
import './App.css';
import SampleComponent from "./components/SampleComponent";

class App extends React.Component
{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <button>click to show tests</button>
          </p>
          <SampleComponent sampleProp={'im a prop string passed from the parent'} />
        </header>
      </div>
    );
  }

}

export default App;
