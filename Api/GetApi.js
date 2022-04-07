import React, { useEffect, useState } from 'react'

export default function GetApi() {
    const [newData, setNewData] = useState([])
    useEffect(() => {
        // const api= 'https://api.instantwebtools.net/v1/airlines' ;
        fetch('https://www.breakingbadapi.com/api/')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setNewData(data)
            });
    }, [])
    console.warn(newData)

    return (
        <>
            <h1>Get API </h1>
            <table>
                <tbody>
                    <tr>
                        <td>char_id</td>
                        <td>name</td>
                        <td>birthday</td>
                        <td>occupation</td>
                    </tr>
                    {
                        newData.map((item) =>
                            <tr>
                                <td>{item.characters}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </>
    )
}