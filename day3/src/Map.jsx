import React from 'react'

const fruits = [
        {id : 1, name : "Apple"},
        {id : 2, name : "Banana"},
        {id : 3, name : "Cherry"}
];

function Fruitsfunc({name})  {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}

const Map = () => {
    
  return (
    <div>
        <h1>Fruits List</h1>

        {/* this is used when the id is dont have uniquely */ }
        {/* <ol>
            {fruits.map((fruit,index) => (
                <li key = {index}>{fruit}</li>
            ))
            }
        </ol> */}

        {/* this is used when the id we have uniquely */ }
        {/* {fruits.map(fruit =>
            <div key={fruit.id}>
                <h2>{fruit.name}</h2>
            </div>
        )} */}

        {/*  Reusable List Items with Components */ }
        <ul>
            {fruits.map(fruit => (
                <li key={fruit.id}>
                    <Fruitsfunc name={fruit.name} />
                </li>
                    
            ))} 
        </ul>
        
    </div>
  )
}

export default Map


