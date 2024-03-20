import React from 'react'
import './Related.css'
import data from '../Assets/data'
import Item from '../Item/Item'

function Related() {
  return (
    <div className='related'>
      <h1>Related Product</h1>
      <hr />
      <div className="relatedprod-item">
        {data.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price}  old_price={item.old_price} /> 
        })}
      </div>
    </div>
  )
}

export default Related
