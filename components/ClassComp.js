import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(){
        super();
        this.state = {name : "Akshay", prof : "Full Stack Devoloper"};
    }

  render() {
    return (
        <>
      <h3>This is class component results passed into Apps.js</h3>
      <h2>hey , name is : {this.state.name} and profession is  {this.state.prof}</h2>
        </>
      )
  }
}
