import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import SubMenu from '../components/SubMenu'
import SideBar from '../components/SideBar'
function Home() {
  return (
    <div>
      <Navbar/>
      <SubMenu/>
      <SideBar/>
      <Header/>
    </div>
  )
}

export default Home
