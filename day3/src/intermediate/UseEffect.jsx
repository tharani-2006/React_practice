import React, { use } from 'react'
import { useState,useEffect } from 'react';

const UseEffect = () => {

    const [count, setCount] = useState(0);
    //const [clearInterval, setClearInterval] = useState(null);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log("Timer running...");
    //     }, 2000);

    //     return () => {
    //         clearInterval(interval); // cleanup
    //         console.log("Timer cleared!");
    //     };
    // },[]);

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    }, [count]);

  return (
    <div>
        <h1>count : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Press me</button>
    </div>
  )
}

export default UseEffect
