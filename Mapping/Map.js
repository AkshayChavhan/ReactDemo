import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

export default function Map() {

    let myData = [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed":1
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": 2
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": 3
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed":4
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed":5
        },
        {
          "userId": 1,
          "id": 6,
          "title": "qui ullam ratione quibusdam voluptatem quia omnis",
          "completed": 6
        },
        {
          "userId": 1,
          "id": 7,
          "title": "illo expedita consequatur quia in",
          "completed":7
        },
        {
          "userId": 1,
          "id": 8,
          "title": "quo adipisci enim quam ut ab",
          "completed":8
        },
        {
          "userId": 1,
          "id": 9,
          "title": "molestiae perspiciatis ipsa",
          "completed": 9
        
        },
        {
          "userId": 1,
          "id": 10,
          "title": "illo est ratione doloremque quia maiores aut",
          "completed": 12
        },
    ]

  return (
    <div>
        <h1>Map</h1>
        <Table striped bordered hover border="1">
            <tr>
                <td>UserId</td>
                <td>ID</td>
                <td>Title</td>
                <td>Status</td>
            </tr>
    { 
       myData.map((data) => 
            <tr>
                <td>{data.userId}</td>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.completed}</td>
            </tr>
        )
    }
        </Table>

    </div>
  )
}
