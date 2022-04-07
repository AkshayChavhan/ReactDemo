import React from 'react';

export default function ShowBuddy(props){

    return(
        <>
        <div className='Show-container'>
            <div>
                <h5>Show Buddy List</h5>
            </div>
            <div>
            <h6>{props.name}</h6>
            <button onClick={()=>{
                props.onSelect(props.id)   
            }}>X</button>
            </div>
            
        </div>
        </>
    )
}