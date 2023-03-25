import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Error from './pages/Error'
import SignUp from './pages/SignUp'
import PayMent from './pages/PayMent'
// components
import Navbar from './components/Navbar'
import ResetPassword from './pages/ResetPassword'
// context
import { useGlobalContext } from './context'


function App() {
  const {currentUser} = useGlobalContext()
  return (
    <div className='app'>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path="/payment" element={<PayMent/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
