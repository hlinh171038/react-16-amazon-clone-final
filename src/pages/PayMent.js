import React from 'react'
import Navbar from '../components/Navbar'
import PayMentSection from '../components/PayMentSection'
import FormChangeAddress from '../components/FormChangeAddress'
import SubMenu from '../components/SubMenu'
import SideBar from '../components/SideBar'
function PayMent() {
  return (
    <div>
        <Navbar/>
        <FormChangeAddress/>
        <SubMenu/>
        <SideBar/>
        <PayMentSection/>
    </div>
  )
}

export default PayMent
