import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { useGlobalContext } from '../context';

function Product({...product}) {
  const {handleOpenCheckout} = useGlobalContext();
  const {id,image,title,price,rating} = product;

  return (
    <div className="product">
      <div className="product__info">
        <p>{title.substring(0,50)}...</p>
        <p className="product__price">
          <strong>{price}</strong>
          <small>đ</small>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((i) => (
              <p><StarIcon style={{color:"yellow"}}/></p>
            ))}
        </div>
      </div>
      <div className='imgs-product'>
          <img src={image} alt="" className='img-product'/>
      </div>
      <button onClick={()=>handleOpenCheckout(id)}>Add to Basket</button>
    </div>
  )
}

export default Product
