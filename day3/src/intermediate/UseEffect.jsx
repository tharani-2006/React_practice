import React, { use } from 'react'
import { useState,useEffect } from 'react';

const UseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect called");
    });

  return (
    <div>
        <h1>count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Press me</button>
    </div>
  )
}

export default UseEffect
