import React from 'react';

export default class SampleComponent extends React.Component {

  constructor(state, props, context) {
    super(state,props, context);
    console.log(this);
    this.state = {
      num: 1, //locally established in state
      passedProp: this.props.sampleProp + 'and updated in local state', //incorporate a passed prop into local state
    };
    this.buttonClicker = this.buttonClicker.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }
  handleMouseDown(e) {
    this.buttonClicker();
  }

  buttonClicker() {
    // this.state.num ++; this doesn't work need to figure out why
    this.setState({ // update locally declared variables within state
      num: this.state.num + 1
    });
    console.log(this.state.num);
    this.doConsoleLogs()
  }

  doConsoleLogs() {
    for(let i=1; i<=this.state.num; i++) { // we can do basic logic in react, huzzah!
      console.log('test')
    }
  }



  render() {
   return(
     <div>
       <div> hello world</div>
       <div>
         <button onClick={this.buttonClicker}>this is a button</button>
         <span> {this.state.num} </span></div>
       <div>
         <button onClick={this.handleMouseDown}> we can do this either way</button>
         <span> {this.state.num} </span>
       </div>

       <div>{this.props.sampleProp}</div> {/* use passed props directly in child component */}
       <div>{this.state.passedProp}</div> {/* passed prop incorporated into local state */}
       <div><button onClick={this.props.action} >update parent var</button></div>
     </div>
   )
 }


}