import React from 'react';
import PropsInLifeCycle2 from './PropsInLifeCycle2';


export default function PropsInLifeCycle(){

    console.log("PropsInLifeCycle running");
    let obj1 = {
        name : 'AKSHAY',
        place: 'Maharashtra'
    }

    return(
        <div>
            <h1>This is PropsInLifeCycle part 1</h1>
            <PropsInLifeCycle2 name={obj1.name} place={obj1.place} />
        </div>
    )
}