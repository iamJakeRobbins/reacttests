import React from 'react';
import logo from './logo.svg';
import './App.css';
import SampleComponent from "./components/SampleComponent";

class App extends React.Component
{
  constructor(state) {
    super();
    this.state = {
      varChangedByChild: 'var set by parent',
    };
    this.handler = this.handler.bind(this);
  }

  // This method will be sent to the child component
  handler(e) {
    console.log(e.target.value)
    this.setState({
      varChangedByChild: e.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            everything below this point on the UI is generated by a single child component
          </p>
          <div>
            <div>{this.state.varChangedByChild}</div>
            <SampleComponent sampleProp={'im a prop string passed from the parent'} action={this.handler} />
          </div>
        </header>
      </div>
    );
  }

}

export default App;
