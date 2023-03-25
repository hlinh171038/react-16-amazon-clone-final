import React from 'react'
import { useGlobalContext } from '../context'
import Product from './Product';

function Products() {
    const {state,search} = useGlobalContext()
    const {products} = state
    console.log(search)
  return (
    <div className='products'>
      <div className='product__row1'>
        {products.filter(product =>{
          return search.toLowerCase() ==='' ? product : product.title.toLowerCase().includes(search)
        }).map(product=>{
          return <Product key={product.id} {...product}/>
        })}
      </div>
    </div>
  )
}

export default Products
