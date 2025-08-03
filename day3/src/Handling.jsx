import React from 'react'
import { useState } from 'react';


const Handling = () => {
    const [name, setName] = useState("");
    const handleclick = () => {
        alert("Button Pressed");
    }
    return (
        <div>
            <button onClick={handleclick}>Press it</button>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            />
            <p>Hello, {name}</p>
        </div>
    )
}

export default Handling



