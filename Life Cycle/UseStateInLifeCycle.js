import React ,{useState} from 'react' ;


export default function UseStateInLifeCycle(){

    const [name ,setName] = useState('Akshay');
    const [count ,setCount] =useState(1);
    console.log('functino runs');

    return(
        <div>
            <h1>Hello guys , I am {name}</h1>
            <button onClick={()=> setName('CHAVHAN')}>Update Name </button>
            <h2>counter :- {count}</h2>
            <button onClick={()=> setCount(count+1)}>Update counter </button>
        </div>
    )
}