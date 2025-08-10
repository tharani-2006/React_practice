import React from 'react'
import { useState } from 'react'
import Parent from './Parent'
const Child = ({setName}) => {
  return (
    <div>
        <h1>Child</h1>
        <input 
        type = "text"
        onChange={(e) => setName(e.target.value)}
        />
    </div>
  )
}

export default Child
