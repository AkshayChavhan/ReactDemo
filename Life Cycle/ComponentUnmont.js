import React, { Component } from 'react'
import ComponentUnmount2 from './ComponentUnmount2';


export default class  extends Component {
    constructor(){
        super();
        this.state = {
            show:true,
        }
    }


  render() {
    return (
        <>
         {
             this.state.show ? <ComponentUnmount2 /> : <h1>null</h1>
         } 
        <button onClick={() =>{this.setState({show : !this.state.show })}}>toggle</button>
        </>
    )
  }
}
