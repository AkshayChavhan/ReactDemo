import React ,{useMemo, useState} from 'react';

export default function Memo1(){
    const [counter ,setCounter] =useState(1);
    const [item ,setItem] =useState(50);



    //below code is to understand that function called on both button click event
//    function increment(){
  //      console.log("increment function running")  //it is found that incermenet() is running 
    //    return counter*10;    }                      //both button clicks

    const multiMemo = useMemo(function multiCount()
    {
        console.log("multicount running")
        return counter* 10;
    },[counter] )   //console should not update on item update button click


    return(
        <>
        <h1>Counter :- {counter} </h1>
        <h1>Item :- {item} </h1>
        <h1>Increment function :- {multiMemo}</h1>
        <button onClick={()=> setCounter(counter+1)}>Update Counter</button>
        <button onClick={()=> setItem(item+1)}>Update Item</button>
        </>
    )
}