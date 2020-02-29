import React from 'react';

export default class NestedChildComponent extends React.Component {
  render() {
    return (
      <div>i'm living inside the child!</div>
    )
  }
  constructor() {
    super();
    console.log('hi')
  }
}