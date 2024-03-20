import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Component/Breadcrums/Breadcrum';
import Proddisplay from '../Component/ProdDisplay/Proddisplay';
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox';
import Related from '../Component/ReleatedProduct/Related';


const Product = () => {
  const{allProduct} = useContext(ShopContext)
  const {productId}=useParams()
  const product=allProduct.find((e)=>e.id === Number(productId))

  return (
    <div>
      <Breadcrum product={product}/>
      <Proddisplay product={product}/>
      <DescriptionBox/>
      <Related/>
    </div>
  )
}

export default Product
