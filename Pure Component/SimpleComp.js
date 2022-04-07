import React from 'react';


export default class SimpleComp extends React.Component{  //Rerending done as its state changing continue, not a pure components

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