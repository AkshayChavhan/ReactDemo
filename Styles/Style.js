import React from 'react';
import './Styler.css';
import style from './Custome.module.css' //not working

export default function Style() {
  return (
    <div>
        <h1 className='ext'> style 1 by external file</h1>
        <h1 style={{color:'green' ,backgroundColor:'pink'}} >style 2 by inline css</h1>
        <h1 className='style.primary'> style 3 by css module</h1>
    </div>
  )
}
