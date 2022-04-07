// this is primary example to learn that everytime useEffect is called when state changes
//useEffect (in functional class component) work as combined of componentDidMount,componentDidUpdate 
// ,componentWillUnmount (in class)
import React ,{useEffect ,useState} from 'react';

export default function UseEffect1(){
    const [count ,setCount] = useState(0);
    useEffect(() =>{
        console.log("useEffect called");
    })
    return(
        <div> 
            <h3>Number of interation :- {count} </h3>
            <button onClick={() => setCount(count +1)} >Increament</button>
        </div>
        
    )
}