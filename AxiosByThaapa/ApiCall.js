import React ,{useEffect, useState} from 'react' ;
import axios from 'axios';

export default function ApiCall() {

    const [num ,setNum] = useState();
    const [name ,setName] = useState();
    const [move ,setMove] = useState();
    // console.log(num)
    
    useEffect(()=>{
        // alert('hi')
         async function getData(){
             const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
             console.log(res.data.name);
             setName(res.data.name)
             setMove(res.data.moves.length)
             
         }
         getData();
    })

  return (
    <div>
        <h1>My name is {name}</h1>
        <h1>I have {move} moves</h1>
        <h1>You choose {num} value</h1>
        <select value={num} onChange={(event) => {
            setNum(event.target.value)
        }}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
        </select>
    </div>
  )
}
