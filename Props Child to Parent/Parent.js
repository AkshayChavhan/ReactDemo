import React from 'react'
import Child from './Child';



export default function Parent() {
    
    function alerter(childData){
        alert("data of parent" );
        console.log("data from Child to parent :- " + {childData})
    }

  return (
      <>
    <div>Parent</div>
    <Child name={alerter} />
      </>
  )
}
