import React from 'react'
import { useState, useEffect } from 'react'

const LifeCycle = () => {

    const [count, setCount] = useState(0)

    //mount

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log("Timer running...");
    //     }, 1000);
    // },[])
    
    
    //update

    // useEffect(() => {
    //     console.log('Component mounted or updated');
    // }, [count]);


    //unmount

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Running...");
        }, 1000);

        return () => {
            clearInterval(timer); 
            console.log("Timer cleared on unmount");
        };
    }, []);


  return (
    <div>
    <h1>hello Life cysle</h1>
      
    </div>
  )
}

export default LifeCycle
