import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='news-letter'>
      <h1>GET EXCLUSIVE OFFER ON YOUR EMAIL</h1>
      <p>SUBSCRIBE to our NewsLetter and stay upadated</p>
      <div>
        <input type="email" placeholder='Enter Email'/>
        <button>SUBSCRIBE</button>
      </div>
    </div>

  )
}

export default Newsletter
