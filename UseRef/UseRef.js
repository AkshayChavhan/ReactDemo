//not working
import React, { Component, createRef } from 'react'
export default class UseRef extends Component {
    contructor()
    {
        // super();
        this.inputRef = createRef();
    }

    compoundDidMount()
    {
        console.log(this.inputRef.current.value='1000')   //setting value to input as 1000
    }

    galVal()
    {
        console.log(this.inputRef.current)
        this.inputRef.current.style.color='red';
        this.inputRef.current.style.backgroundColor='black';
    }

  render() {
    return (
      <div>
          <h1>ref in react</h1>
          <input type='text' ref={this.inputRef}  />
          <button onClick={()=>this.getVal()}>Check ref</button>

      </div>
    )
  }
}
