import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import remove from '../../assets/cross_icon.png'

const ListProduct = () => {
  const[allproduct,setAllProduct]=useState([])

  const fetchInfo = async ()=>{
    await fetch('http://localhost:1001/allproduct')
    .then((res)=>res.json())
    .then((data)=>{setAllProduct(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const removeProduct = async(id)=>{
    await fetch('http://localhost:1001/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='listproduct'>
      <h1>All Product List</h1>
      <div className="listpordformatmain">
        <p>product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listprodallprod">
        <hr />
        {allproduct.map((product,index)=>{
          return<> <div key={index} className="listpordformatmain listprodformat">
            <img className='listprodicon' src={product.image} alt="" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{removeProduct(product.id)}} className='listprodremove' src={remove} alt="" />
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct


















