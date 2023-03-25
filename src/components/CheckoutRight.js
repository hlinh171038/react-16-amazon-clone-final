import React from 'react'
import { useGlobalContext } from '../context'
import {Link} from 'react-router-dom'

function CheckoutRight() {
  const {state,closeSubmenu} = useGlobalContext();
  const handleCloseSubMenu =()=>{
    closeSubmenu()
  }
  if(state.checkoutArr.length === 0){
    return <div className='checkout__empty' onMouseOver={handleCloseSubMenu}>
      <p className='checkout__empty__title'>
        don't have product to checkout
      </p>
      <button><Link to="/">back to home</Link></button>
    </div>
  }
  return (
    <div className='checkout__right' onMouseOver={handleCloseSubMenu}>
        <div className='checkout__right__container'>
          <p className=''>Subtotal({state.total} item) <strong>{state.price}đ</strong></p>
          <small className="subtotal__gift">
            <input type="checkbox"/> this order contains the gift
          </small>
          <button><Link to='/payment'>Proceed to Checkout</Link></button>
        </div>
    </div>
  )
}

export default CheckoutRight
