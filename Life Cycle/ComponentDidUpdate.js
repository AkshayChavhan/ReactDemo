import { render } from '@testing-library/react';
import React from 'react';

export default class ComponentDidUpdate extends React.Component{

    constructor(){
      
        super();
        alert("constructor")  
        this.state ={
            name : "akshay",
            id :  "me21"
        }
    }

    componentDidUpdate(prevProps , prevState , snapshot){
      alert("ComponentDidUpdate" , prevState);
    }

    render(){
        alert("render")  
        return( 
            <div>
                <h1>hi , {this.state.name} and my id is {this.state.id}</h1>
                <button onClick={()=> {this.setState({name : "babapan" , id:"me40"})}}>clcick</button>
            </div>

        )
    }
}