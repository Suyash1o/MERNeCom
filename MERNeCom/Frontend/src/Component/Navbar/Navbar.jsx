import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../Assets/logo.png'
import carticon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import downarrow from '../Assets/downarrow.png'

function Navbar() {
    const[menu,setMenu]=useState("shop")
    const{getTotalCartItems}=useContext(ShopContext)
    const menuref = useRef();

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>BlueOcean</p>
        </div>
        <ul ref={menuref} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          {localStorage.getItem('auth-token')
          ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/")}}>Logout</button>
          :<Link to='/login'><button>Login</button></Link>}           
           <Link to='/cart'><img src={carticon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}
            </div>
        </div>      
    </div>
  )
}

export default Navbar
