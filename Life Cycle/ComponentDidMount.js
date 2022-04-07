import React from 'react'

export default class ComponentDidMount extends React.Component{
    constructor(){
        alert("constructor");
        
        super()
        this.state = {
            name : "akshay" ,
            surname :"chavhan",
        }
    }
    componentDidMount(){
        alert("mount");
    }
    
    render(){
        alert("render");
        return(
            <div>
                 <h1>Hi ,{this.state.name} and ur surname is {this.state.surname}</h1>
                 <button onClick={()=>{ this.setState({name:"Roshani" ,surname : "Maharashtra"})} }>click</button>
                 alert("return");
         </div>  
    )
    }
}