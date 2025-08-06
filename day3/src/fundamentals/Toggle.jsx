import React from 'react'
import { useState } from 'react';

const Toggle = () => {
    const [isVisible,setVisible] = useState(false);
    const [name, setName] = useState("");
  return (
    <div>
        {/* <button onClick = {() => setVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}Message</button>

        {isVisible && <p>This is a toggle message!</p>} */}

        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={()=>setVisible(!isVisible)}>
            {isVisible ? "Hide" : "Show"} Name
        </button>

        {isVisible && <h1>Hii daaa {name}</h1>}
      
    </div>
  )
}

export default Toggle
