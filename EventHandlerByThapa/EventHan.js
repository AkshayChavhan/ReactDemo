import React ,{useState} from 'react';
import './EventHan';

const EventHan = () =>{
    let green = "rgba(61,123,61,1)" ;
    let yellow = "rgba(255,255,0,1)";
    
    const [bg , setBg] = useState(green);
    const [textColor , setTextColor] = useState(yellow)
    const [text , setText] = useState('Click Me')

    function btnClicked(){
        setBg(yellow);
        setTextColor(green);
        setText('You Clicked it')

    }


    return(


        <>
        <button id='btn' style={{backgroundColor:bg , color:textColor}} onClick={btnClicked}>{text}</button>
        </>
    )
}

export default EventHan ;