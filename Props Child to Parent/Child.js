import React from 'react'

export default function Child(props) {
    const childData = {
        name:"akshay",
        surname : "chavhan",
        lang:"english0"
    }

    return (
      <>
        <div>Child</div>
        <h1>the parent to child data :- {props.name(childData)}</h1>
      </>
  )
}
