import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [count,setCount] = useState(0);
    const [name, setName] = useState("");
    const [age,setAge] = useState(0);
    const [place,setPlace] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState("Not loggined");

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={() => setCount(count +1)}>Increment</button>
        <button onClick={() => setCount(count -1)}>Decrement</button>

        <form>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter Age" />
            <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Enter Place" />
        </form>
        <h2>My name is {name}, I am {age} years old, and I live in {place}.</h2>
        <button onClick={() => setIsLoggedIn("LoggedIn")}>Login</button>
    </div>
  )
}

export default Counter
