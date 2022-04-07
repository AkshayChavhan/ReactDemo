import React, { useState } from 'react';
import ShowBuddy from './ShowBuddy';

export default function InterBuddy(props) {

    const [name, setName] = useState("");
    const [data, setData] = useState([]);

    const handleChanges = (changes) => {
        setName(changes.target.value);
        // console.log(changes.target.value);

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('working')
        const newName = name;
        console.log(newName)
        let result= data.concat(name)
        setData(result)
        // setData([...data, newName])
        // console.log(...data)
        // setName('')
    }

    const deleteName = (a) => {
        const finalData = data.filter((curEle, index) => {
            return index !== a;

        })
        setData(finalData);
    }
    return (
        <>
            <div className='container'>
            {JSON.stringify(data)}
                <form>
                    <h1>Buddy List</h1>
                    <input type='text' value={name} onChange={handleChanges} /><br /><br />
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                </form>
                {
                    data.map((val, index) => {
                        return 
                    (   
                        <div>
                            {
                                <>
                                <h1>{'val'}</h1>
                                <button onClick={deleteName}>X</button>
                                </>
                             
                            }
                        </div>
                    )  
                        //    <ShowBuddy name={value} id={index} onSelect={deleteName(props.id)} />
                    })
                }
            </div>
            {/* <ShowBuddy /> */}
        </>
    )
}