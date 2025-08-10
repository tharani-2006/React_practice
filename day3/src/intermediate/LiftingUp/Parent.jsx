import React from 'react'
import {useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [name, setName] = useState("")
  return (
    <div>
      <h1>  Parent</h1>
      <Child setName={setName} />
      <h2> Name: {name}</h2>
    </div>
  )
}

export default Parent
