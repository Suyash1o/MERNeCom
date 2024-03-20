import React, { useContext } from "react";
import "./Proddisplay.css";
import star from "../Assets/star_icon.png";
import stardull from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

function Proddisplay(props) {
  const { product } = props;
  const{addToCart} = useContext(ShopContext);

  return (
    <div className="proddisplay">
      <div className="prodleft">
        <div className="prod-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="prod-dis-img">
          <img className="proddis-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="prodright">
        <h1>{product.name}</h1>
        <div className="proddis-right-star">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={stardull} alt="" />
          <p>{122}</p>
        </div>
        <div className="proddis-right-prices">
            <div className="proddis-right-price-old">${product.old_price}</div>
            <div className="proddis-right-price-new">${product.new_price}</div>
        </div>
          <div className="proddis-right-disc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
          <div className="proddis-right-size">
            <h1>Select Size</h1>
            <div className="proddis-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
          <p className="proddis-right-cate">
            <span>category :</span>Women , T-shirt ,crop top
          </p>
          <p className="proddis-right-cate">
            <span>Tags :</span>Modern , Latest
          </p>
        
      </div>
    </div>
  );
}

export default Proddisplay;
