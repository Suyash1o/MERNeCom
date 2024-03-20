import React, { useContext } from 'react'
import './CSS/Shopcategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown from '../Component/Assets/dropdown_icon.png'
import Item from '../Component/Item/Item'

const Shopcategory = (props) => {
    const{allProduct} = useContext(ShopContext)

    console.log('props.category:', props.category);
    // console.log('allProduct:', allProduct);

  return (
    <div className='shop-category'>
        <img className='shop-category-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
            <p>
                <span>Showing 1-12</span> out of 36 product
            </p>
            <div className="shop-categorySort">
                Sort by <img src={dropdown} alt="" />
            </div>
        </div>
        <div className="shopcategory-product">
            {allProduct.map((item,i)=>{
                if( props.category===item.category){
                    return  <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price}  old_price={item.old_price}/> 
                    
                }
                else{
                    return null;
                }
            })}
        </div>
        <div className="shopCategory-Loadbtn">
            Explore More

        </div>
    </div>
  )
}

export default Shopcategory
