import React from 'react'
import {useState} from 'react'

const ControlledInputs = () => {
    const [name, setName] = useState('');
  return (
    <div>
      <input 
      type = "text"
      value={name}
      onChange={(e)=> setName(e.target.value)}
      >
      </input>  
      <h2>{name}</h2>
    </div>
  )
}

export default ControlledInputs
