import React from 'react'
import {useRef} from 'react'

const UncontrolledInputs = () => {
    const nameRef = useRef(null);

    function handlesubmit() {
        alert(nameRef.current.value);
    }
  return (
    <div>
      <h2>Uncontrolled Inputs Example</h2>

      <input
      type = "text"
      ref={nameRef} />

      <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default UncontrolledInputs
