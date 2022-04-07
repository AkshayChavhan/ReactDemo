import React, { Component } from 'react'
import PureCompWithPropsChange1 from './PureCompWithPropsChange1';

export default class PureCompWithPropsChange2 extends Component {

    constructor()
    {
        super() ;
        this.state ={
            counter : 1 ,
        }
    }

  render() {
    return (
        <div>
            <h1>PureCompWithPropsChange2</h1>
            <PureCompWithPropsChange1 name={this.state.counter}/>
            <button onClick={()=> this.setState({counter: this.state.counter})}>Update counter</button>
        </div>
    )
  }
}
