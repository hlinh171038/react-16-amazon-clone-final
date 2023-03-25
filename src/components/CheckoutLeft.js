import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useGlobalContext } from '../context'

function CheckoutLeft() {
    const {state,handleIncrese,handleDecrese,handleDelete,handleRemoveAll,closeSubmenu} = useGlobalContext()

    const handleCloseSubMenu =()=>{
        closeSubmenu()
      }
  return (
      <div className="checkout__left" onMouseOver={handleCloseSubMenu}>
        {state.checkoutArr.map(item=>{
          const {id,image,title,price,rating,amount} = item
          return <div className='checkoutProduct'>
                    <img className='checkoutProduct__image' src={image} />
                    <div className='checkoutProduct__info'>
                        <p className='checkoutProduct__title'>{title}</p>
                        <p className="checkoutProduct__price">
                            
                            <strong>{price}</strong>
                            <small>đ</small>
                        </p>
                        <div className="checkoutProduct__rating">
                            {Array(rating)
                            .fill()
                            .map(( i) => (
                                <p><StarIcon style={{color:'yellow'}}/></p>
                            ))}
                        </div>
                        <div className='checkout__quantity'>
                            <p className='checkout__amount'><span><strong>Quantity:</strong></span></p>
                            <div className='checkout__arrow'>
                                <button onClick={()=>handleIncrese(id)}><KeyboardArrowUpIcon/></button>
                                {amount}
                                <button><KeyboardArrowDownIcon onClick={()=>handleDecrese(id)}/></button>
                            </div>
                        </div>
                            <button onClick={()=>handleDelete(id)}>Remove from Basket</button>
                    </div>
                </div>
        })}
        {state.checkoutArr.length>0 && <div className='checkout__remove__all'>
                                            <button onClick={handleRemoveAll}>remove all items</button>
                                        </div>}
      </div>
  )
}

export default CheckoutLeft
