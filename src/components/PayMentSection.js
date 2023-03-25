import React from 'react'
import CheckoutLeft from './CheckoutLeft'
import { useGlobalContext } from '../context'
function PayMentSection() {
    const {openFormAddress,
            nameAddress,
            phone,
            address,
            province,
            district,
            ward,
            state,
        closeSubmenu} = useGlobalContext()
    
    const handleCloseSubMenu =()=>{
                closeSubmenu()
            }
  return (
    <div className='payments__container' onMouseMove={handleCloseSubMenu}>
      <div className='payments__left'>
            <div className='payment__left__cover__top'>
                <p className='payment__left__title'>
                    <span>shipping address</span>
                    <span className='payment__left__title__edit' onClick={openFormAddress}>Edit</span>
                </p>
                <div className='payment__left__content_info'>
                    <div className='payment__left_info__cover'>
                        <p className='payment__left__name'>{nameAddress}</p>
                        <p className='payment__left__numberphone'>{phone}</p>
                    </div>
                    <div className='payment__left__address__cover'>
                        <p className='payment__left__address__home'>home</p>
                        <p className='payment__left__address'>{address}-{province}-{district}-{ward}</p>
                    </div>
                </div>
            </div>
            <div className='payment__left__cover__bottom'>
                <div className='payment__left__bottom__header'>
                    <p>package 1</p>
                    <p>shipper: Nguyen Tat Duy</p>
                </div>
                <div className='payment__left__bottom__products'>
                    <CheckoutLeft/>
                </div>
            </div>
      </div>
      <div className='payments__right'>
        <p className='payment__right__title'>selected method</p>
        <div className='zalo__pay'>
            <img src='./image/zalopay-card.png'/>
            <span>zalo pay wallet</span>
        </div>
        <div className='zalo__pay'>
            <img src='./image/paypal-card.png'/>
            <span>Card on delivery</span>
        </div>
        <p className='payment__right__voucher payment__right__title'>voucher</p>
        <div className='voucher__input'>
            <input type='text' placeholder='Type voucher code'/>
            <button>apply</button>
        </div>
        <p className='payment__right__title'>Invoice and Contact Info</p>
        <p className='payment__right__title'>Order Summary</p>
        <div className='payment__right__cal'>
            <p className='subtotal'>subtotal({state.total} item)</p>
            <p className ='price'>{state.price} Vnđ</p>
            <p className='shipping'>shipping free</p>
            <p className='price'>{state.checkoutArr.length ===0?'0 Vnđ': '14000 Vnđ'}</p>
        </div>
        <hr/>
        <div className='payment__right__total'>
            <p className='payment__total__title'>total</p>
            <p className='payment__total__price'>{state.checkoutArr.length >0 ? (state.price+14000)+' vnđ': '0 vnđ'} </p>
        </div>
        <div className='payment__right__proceed'>proceed to payment</div>
      </div>
    </div>
  )
}

export default PayMentSection
