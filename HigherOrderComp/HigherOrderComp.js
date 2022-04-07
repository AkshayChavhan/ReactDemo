import React, { useState } from 'react';

export default function HigherOrderComp() {

    return (
        <>
            <Counter />
            <CounterGreen func={Counter} />
            <CounterBlue func={Counter} />

        </>
    )
}

function CounterGreen(props) {
 
    return (<h3  style={{backgroundColor:'green', width:100 }}>Green <props.func/></h3>)
}

function CounterBlue(props) {
 
    return (<h3  style={{backgroundColor:'blue', width:100 }}>Blue <props.func/></h3>)
}


//main function
function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h3>Counter :- {counter}</h3>
            <button onClick={() => setCounter(counter + 1)}>Update</button>
        </>
    )
}