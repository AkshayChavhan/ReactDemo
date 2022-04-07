//this is about how can we call it on specific state
import React ,{useState ,useEffect} from 'react';

export default function UseEffect2(){
    //usestate 1 defined
    const [count ,setCount] =useState(100);
    //usestate 2 defined
    const [counter ,setCounter] =useState(10);

    //useEffect is working common after checking (this is running for both state change) 
    useEffect(()=>{
        console.log('useEffect running common for both');
    })

    //this usestate for counter
    useEffect(()=>{
        console.log('useEffect running for counter');
    } ,[counter])

    //this usestate for count
    useEffect(()=>{
        console.log('useEffect running for count');
    } ,[count])


    return(
        <div>
            <h1 >Counter :- {counter}</h1>
            <h1 >Count :- {count}</h1>
            <button onClick={() =>setCounter(counter + 1)}>Counter</button>
            <button onClick={() =>setCount(count +1 )}>Count</button>
        </div>
    )
}