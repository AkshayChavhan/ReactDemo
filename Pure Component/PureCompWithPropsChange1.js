import React, { PureComponent } from 'react';


export default class PureCompWithPropsChange1 extends PureComponent{  //NO Rerending done as its state IS NOT changing continue

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
                <h1>Name is :- {this.props.name} </h1>
                {/* <button onClick={()=>this.setState({count : 2 })}>Update</button> */}
            </>
        )
    }
}