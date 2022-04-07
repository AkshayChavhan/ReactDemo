import React ,{useState} from 'react'
import UseEffect3 from './UseEffect3';

export default function App4() {
    //setting states for counter and count

    const [counter ,setCounter] =useState(50);
    const [count ,setCount] =useState(60);
  
    
  return (
    <div>
        <UseEffect3 counter={counter} count={count} />
        <button onClick={() => setCount(count +1 )}>Count</button>
        <button onClick={() => setCounter(counter +1 )}>counter</button>
    </div>
  )
}
