import React, { createContext, useEffect, useState } from 'react'
import allProduct from "../Component/Assets/all_product"

export const ShopContext = createContext(null)

const getDefaultCart = ()=>{
    let cart={};
    for (let index = 0; index < allProduct.length+1; index++) {
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const[cartItems,setCartItem]=useState(getDefaultCart())

    const addToCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:1001/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data))
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=allProduct.find((product)=>product.id===Number(item))
                totalAmount =totalAmount + itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount
    }

    const getTotalCartItems = () =>{
        let totalTtems = 0
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalTtems+=cartItems[item]
            }
        }
        return totalTtems
    }

    const contextValue = {getTotalCartItems,allProduct,cartItems,addToCart,removeFromCart,getTotalCartAmount}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
