import React, { useState } from 'react'
import './AddProduct.css'
import upload from '../../assets/upload_area.svg'

const AddProduct = () => {

    const[productDetails,setProductDetails]=useState ({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:"",
    })
    const[image,setImage]=useState(false)

    const imageHandler = (e)=>{
        setImage(e.target.files[0]);
    }
    
    const changeHandler=(e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const AddProduct = async ()=>{
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product',image);

        await fetch('http://localhost:1001/upload',{
          method:'POST',
          headers:{
            Accept:'application/json',
          },
          body:formData,
        }).then((resp) =>resp.json()).then((data)=>{responseData=data});
        if(responseData.success){
          product.image = responseData.image_url;
          console.log(product);
          await fetch('http://localhost:1001/addproduct',{
            method:'POST',
            headers:{
              Accept:'application/json',
              'Content-Type':'application/json', 
            },
            body:JSON.stringify(product),
          }).then((res)=>res.json())
            .then((data)=>{
            if(data.success){   
              alert("Product Added");
            }else{
              alert("Failed");
            }
          })
        }
    }
  


  return (
    <div className='addproduct'>
      <div className="addProductItemFeild">
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type Here'/>
      </div>
      <div className="addProductPrice">
        <div className="addProductItemFeild">
            <p>Price</p>
            <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='type Here'/>
        </div>
        <div className="addProductItemFeild">
            <p>Offer Price</p>
            <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='type Here'/>
        </div>
      </div>
      <div className="addProductItemFeild">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='addProdSelector'>
        <option >Add</option>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">kid</option>
        </select>
      </div>
      <div className="addProductItemFeild">
        <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload} className='addProdThumbnail' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input'/>
      </div>
      <button onClick={()=>{AddProduct()}} className='addprodBtn'>Add</button>
    </div>
  )
}

export default AddProduct;
