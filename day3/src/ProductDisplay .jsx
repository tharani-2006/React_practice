import React from 'react'

const ProductDisplay  = () => {
    const pro_name = "Laptop";
    const pro_price = 50000;
  return (
    <div className='card'>
        <h2>Name : {pro_name}</h2>
        <h3>Price : {pro_price}</h3>
      
    </div>
  )
}

export default ProductDisplay 
