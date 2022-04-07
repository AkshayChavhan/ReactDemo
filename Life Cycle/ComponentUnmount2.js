import React, { Component } from 'react'

export default class ComponentUnmount2 extends Component {
  constructor(){
    super();
  }

  componentWillUnmount(){
    console.log('componentWillUnmount is called');
  }

  render() {
    return (
      <div>ComponentUnmount2</div>
    )
  }
}
