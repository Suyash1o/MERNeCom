import React, { useContext } from 'react'
import './Cartitem.css'
import remove from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'

function Cartitem() {
  const {getTotalCartAmount,allProduct,cartItems,removeFromCart} = useContext(ShopContext)
  // const { allproduct, cartItems, removeFromCart } = useContext(ShopContext)

  return (
    <div className='cartitem'>
      <div className="cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Qty</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProduct.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitem-format cartitem-format-main" key={e.id}>
                <img className='carticon-product-icon' src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitem-qty'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className='cartitem-remove-icon' src={remove} onClick={() => { removeFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          )
        }
        return null;
      })}
      <div className="cartitam-dowm">
        <div className="cartitem-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitem-total-item">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cartitem-total-item'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed to  check out</button>
        </div>
        <div className="cartitem-promocode">
          <p>If you have a promo code,Enter it here</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder='promocode'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitem
