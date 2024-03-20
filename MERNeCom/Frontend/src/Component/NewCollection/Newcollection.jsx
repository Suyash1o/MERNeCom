import React, { useEffect, useState } from 'react'
import './Newcollection.css'
import newcollection from'../Assets/new_collections'
import Item from '../Item/Item'

const Newcollection = () => {
  // const[newcollection,setNewCollection]=useState([])

  // useEffect(()=>{
  //   fetch('http://localhost:1001/newcollection')
  //   .then((res)=>res.json())
  //   .then((data)=>setNewCollection(data))
  // },[])
  return (
    <div className='new-collection'>
        <h1>NEW COLLECTIONS</h1>
        <hr />

        <div className="collections">
            {newcollection.map((item,i)=>{
              console.log(item);
              console.log(item.category);
            return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price}  old_price={item.old_price} /> 
        })}
        </div>

    </div>
  )
}

export default Newcollection
