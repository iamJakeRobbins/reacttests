import React from 'react';

export default class Example2 extends React.Component {

  constructor() {
    super();
    console.log('hi boys')
    this.state = {
      num: 1
    };
    this.buttonClicker = this.buttonClicker.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }
  handleMouseDown(e) {
    this.buttonClicker();

    e.stopPropagation();
  }

  buttonClicker() {
    // this.state.num ++;
    this.setState({ // this is why react is garbo
      num: this.state.num + 1
    });
    console.log(this.state.num);

  }



  render() {
   return(
     <div>
       <span> hello world</span>
       <button onClick={this.handleMouseDown}>this is a button</button>
       <span> {this.state.num} </span>
     </div>
   )
 }


}