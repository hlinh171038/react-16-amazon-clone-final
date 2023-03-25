import React,{useState,useRef} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../App.css'
import MenuIcon from '@mui/icons-material/Menu';
import {Link,useNavigate} from  'react-router-dom'
import { useGlobalContext } from '../context';
import productdata from '../data/productdata'

function Navbar() {
  const {state,
    currentUser,
    logout,
    openSubmenu,
    contry,
    imgCountry,
    closeSubmenu,
    handleOpenSideBar,
    handleChangeType,
    setSearch,
    handleCatagory
  } = useGlobalContext();
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const languageRef = useRef()
  const handleLogOut = async(e)=>{
    e.preventDefault()
    try {
      setLoading(true)
      setError('')
      await logout()
      navigate('/login')
    } catch (error) {
      setError('log out faill')
    }
    setLoading(false)
  }
  // submenu
  const handleOpenSubmenu =(e)=>{
    const page = e.currentTarget.id
    let left = e.currentTarget.getBoundingClientRect().left;
    let right = e.currentTarget.getBoundingClientRect().right;
    let center = (left+right)/2
    let bottom = e.currentTarget.getBoundingClientRect().bottom;
    console.log(center,bottom)
    openSubmenu(page,{center,bottom})
  }
// side bar
  
  return (
    <div className='navs__container' >
      <div className='navs'>
      <div className='nav__logos'>
        <Link to='/'>
        <img  className='img__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>
      </div>
      <div className='nav__searchs'>
        <form>
            <input type="text" placeholder="typing your product" className="input__serch" onChange={e =>setSearch(e.target.value)}/>
            <SearchIcon className='search__icon'/>
        </form>
      </div>
      <div className='nav__languages nav__submenu' onMouseOver={handleOpenSubmenu}  id="language">
        <span className='return__lineone'><img src={imgCountry} className='vn__flag'/> {contry}</span>
      </div>
      <div class='nav__logins nav__submenu' onMouseOver={handleOpenSubmenu} id="account">
        <span className="login__lineone">hello,{currentUser ? currentUser.email :"signin"}</span>
        <span className='login__linetwo'>{currentUser? <Link to='/login' onClick={handleLogOut} className={`btn__logout`}>Log out</Link>:
         <Link to='/login' className='btn__logout'>Log in</Link>}</span>
      </div>
      <div className='nav__returns'>
        <span className='return__lineone'>returns</span>
        <span className='return__linetwo'>&order</span>
      </div>
      <div className='nav__carts'>
        <Link to='/checkout'>
          <AddShoppingCartIcon />
        </Link>
        <p className='nav__carts__amount'>{state.total}</p>
      </div>
    </div>
    <div className='main__navs'>
      <div className='all__catas' onClick={handleOpenSideBar}>
        <MenuIcon/>
        <span>all</span>
      </div>
      <div className='nav__fill'>
        <div className='nav__shops'>
          {productdata.reduce((total,item)=>{
            if(!total.includes(item.catagory)){
              total.push(item.catagory)
            }
            return total
          },['all']).map(item=>{
            return <div onClick={()=>handleCatagory(item)}>{item}</div>
          })}
          {/* <div >today's deal</div>
          <div  onClick={handleFilterTech}>technical</div>
          <div onClick={handleFilterKitchen}>kitchen</div>
          <div >gymnastics</div>
          <div >books</div> */}
        </div>
      </div>
      <div className='nav__rights'>
        <div className='shop__deal'>shop deal in electronic</div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
