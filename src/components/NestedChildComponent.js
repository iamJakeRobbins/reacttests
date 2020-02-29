import React from 'react';

export default class NestedChildComponent extends React.Component {
  render() {
    return (
      <div>
        <div>i'm living inside the child!</div>
        <div>{this.props.headProps}</div>
        <div>{this.state.transformPropsToState}</div>
        </div>

    )
  }
  constructor(state, props) {
    super(state, props);
    this.state = {
      transformPropsToState: this.props.headProps,
    };
    console.log(this.props)
  }
}