import React, { useState,useEffect } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useGlobalContext } from '../context';
/**------------component--------- */
import Products from './Products'


function Header() {
  const {slides,closeSubmenu} = useGlobalContext()
  let [index,setIndex] = useState(0)
  console.log(slides.length -1)

  const handleNextImage = ( )=>{
    setIndex(oldindex =>{
      let index = oldindex +1;
      if(index >slides.length -1){
        index  = 0;
      }
      return index;
    } );
  }
  useEffect(() => {
    const interval = setInterval(()=>{
      handleNextImage()
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePreImage =()=>{
    setIndex(oldindex =>{
      let index = oldindex -1;
      if(index < 0){
        index = slides.length -1;
      }
      return index;
    });
  }
  const handleCloseSubMenu =()=>{
    closeSubmenu()
  }
  return (
    <div className='headers'onMouseOver={handleCloseSubMenu}>
      <div className='slideshows'>
          <img className='silde-img' src={slides[index].image}/>
          <button className='pre-btn' onClick={handlePreImage}>
              <ArrowBackIosIcon/>
          </button>
          <button className='next-btn'onClick={handleNextImage}>
              <ArrowForwardIosIcon/>
          </button>
      </div>
      <Products/>
    </div>
  )
}

export default Header
