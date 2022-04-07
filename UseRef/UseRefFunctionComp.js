import React ,{useRef} from 'react'

export default function UseRefFunctionComp() {
    const inputRef = useRef(null);
    function controlInput()
    {
        // inputRef.current.value = 'abc';
        inputRef.current.style.color ='red'
        inputRef.current.style.backgroundColor ='green'
        inputRef.current.focus()
        // inputRef.current.style.display ='none '
    }
  return (
    <div>
        <input type="text" ref={inputRef} /> <br/><br/>
        <button onClick={controlInput}>Check Useref</button>
    </div>
  )
}
