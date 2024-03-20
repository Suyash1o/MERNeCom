import React from 'react'
import './Navabr.css'
import navlogo from '../../assets/nav-logo.svg'
import navpro from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='navlogo' src={navlogo} alt="" />
      <img className='nav-profile' src={navpro} alt="" />

    </div>
  )
}

export default Navbar
