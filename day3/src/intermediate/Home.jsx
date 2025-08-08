import React from 'react'
import { Navigate } from 'react-router-dom';

const Home = () => {
    const isLoggedIn = true;
  return (
    
    <div>
        {/* <h1> Home Page bro</h1> */}
        
        isLoggedIn ? <h1>Welcome</h1> : <Navigate to="/lifecycle"/>;

    </div>
  )
}

export default Home
        