import React from 'react'
import { useState } from 'react'



export default function StateFunBtn(){
    const [name ,setName ] = useState("Akshay");

    function updateName(){
        setName("AKSHAY GOPILAL CHAVHAN");
    }

    return(
    <div>
            <h1>Hello , My name is {name}</h1>
            <button onClick={updateName}>Update Name</button>
    </div>
)
}