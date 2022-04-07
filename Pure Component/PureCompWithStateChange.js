import React, { PureComponent } from 'react';


export default class PureCompWithStateChange extends PureComponent{  //Rerending done as its state changing continue

    constructor(){
        super();
        this.state ={
            count : 1
        }
    }
    render(){
        console.log("Rerending done as it is not a pure components")

        return(
            <>
                <h1>Name is :- {this.state.count}</h1>
                <button onClick={()=>this.setState({count : this.state.count +1 })}>Update</button>
            </>
        )
    }
}