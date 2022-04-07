//this is about how can we call it on specific props
//please use App4.js file to pass props in useEfffect3.js file

import React ,{useEffect} from 'react';


export default function UseEffect3(props){

    //useeffect for counter
    useEffect(()=>{
        console.log("useEffect for counter")
    },[props.counter])


    //useeffect for count
    useEffect(()=>{
        console.log("useEffect for count")
    },[props.count])
  
  
    //we can make useeffect for both
    useEffect(()=>{
        console.log("useEffect for both")
    },[props.count,props.counter])

    
    return(
        <div>
            <h1>Count :- {props.count}</h1>
            <h1>Counter :- {props.counter} </h1>
          
        </div>
    )
}