import React from 'react'
import { useState } from 'react'

export default function ConditionalRendering() {
    const[user , setUser] = useState(3);

    return (    
    <div>
        {
            user ==1? <h1>Wlcome User 1</h1> 
            :user ==2? <h1>Wlcome User 2</h1>
            :<h1>Wlcome User 3</h1>
        }
    </div>
  )
}
