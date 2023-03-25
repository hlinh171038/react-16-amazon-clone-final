import React ,{useRef,useEffect} from 'react'
import { useGlobalContext } from '../context'
function SubMenu() {
    const {isSubmenu,location,page,handleCheck,imgCountry} = useGlobalContext()
    const submenuAccountRef = useRef()
    useEffect(()=>{
        const {center,bottom} = location
        const page = submenuAccountRef.current
        console.log(page)
        page.style.left=`${center}px`
        page.style.top = `${bottom}px`
    },[location])
    
    if(page.title ==='language'){
        return <div className={isSubmenu ? 'submenu__language__container show__language':'submenu__language__container '} ref={submenuAccountRef}>
                        <p className='submenu__language__title'>{page.title}</p>
                        <hr/>
                        <div className='submenu__language__country'>
                            {page.links.map(item=>{
                                return <lable>
                                    <input type='radio' name="radio" value={item.contry} className="submenu__language__input" onClick={()=>handleCheck(item)}/>
                                    {item.contry}
                                </lable>
                            })}
                        </div>
                        <hr/>
                        <div className='submenu__language__footer'>
                            <img src={imgCountry} className='vn__flag'/>
                            <p className='submenu__language__content'>you are shopping <br/>on <em>Amazon.com</em></p>
                        </div>
                </div>
    }
  return (
    <div className={isSubmenu ? 'submenu__account__container show__account': 'submenu__account__container '} ref={submenuAccountRef}>
      <div className='submenu__account__cover'>
        <div className='submenu__account__left'>
            <p className='submenu__account__left__title'>your list</p>
            <p className='submenu__account__left__content'>create a list find <br/>the list or registry</p>
        </div>
        <div className='submenu__account__right'>
            <p className='submenu__account__right__title'>your account</p>
            <div className='submenu__account__right__content'>
                {page.links.map(item=>{
                    return <p>{item}</p>
                })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default SubMenu
