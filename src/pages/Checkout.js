import React from 'react'
import CheckoutLeft from '../components/CheckoutLeft'
import CheckoutRight from '../components/CheckoutRight'
import Navbar from '../components/Navbar'
import SubMenu from '../components/SubMenu'
import SideBar from '../components/SideBar'
function Checkout() {
  return (
    <div className='checkouts'>
      <Navbar/>
      <SubMenu/>
      <SideBar/>
      <CheckoutLeft/>
      <CheckoutRight/>
    </div>
  )
}

export default Checkout
