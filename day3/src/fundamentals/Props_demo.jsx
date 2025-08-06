import React from 'react'

const props_demo = (props) => {
  return (
    <div>
        <h1>Props Demo</h1>
        <h2>{props.name} <br/>
            {props.length}
        </h2>
    </div>
  )
}

export default props_demo
