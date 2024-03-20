import React from 'react'
import './Breadcrum.css'
import arrows from '../Assets/breadcrum_arrow.png'

function Breadcrum(props) {
    const{product}=props
  return (
    <div className='breadcrum'>
      Home <img src={arrows} alt="" /> Shop <img src={arrows} alt="" /> {product.category} <img src={arrows} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum
