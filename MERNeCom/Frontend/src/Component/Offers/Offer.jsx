import React from 'react'
import './Offer.css'
import  exclusive from '../Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>OFFERS FOR  YOU</h1>
        <p>ONLY ON  BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive} alt="" />
      </div>
    </div>
  )
}

export default Offer
