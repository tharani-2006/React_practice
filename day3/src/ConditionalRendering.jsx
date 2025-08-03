import React from 'react'

const ConditionalRendering = () => {
    const isIn = true;
    const age = 20;
  return (
    <div>
        {isIn ? (
                <h1>U r gud</h1>
            ) : (
                <h1>U r bad</h1>
            )}

        <h2> U r {isIn ? "good" : "bad"}</h2>
        {age > 18 && <p>You are eligible to vote!</p>}

      
    </div>
  )
}

export default ConditionalRendering
