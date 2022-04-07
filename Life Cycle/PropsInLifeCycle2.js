import React from 'react';


export default function PropsInLifeCycle2(props){

    console.log("PropsInLifeCycle2 running");

    return(
        <div>
            
            <h1>This is PropsInLifeCycle part 2 </h1>
            <p>My Name is {props.name} and my place name is {props.place}</p>
            
        </div>
    )
}