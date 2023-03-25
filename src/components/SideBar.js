import React from 'react'
import { useGlobalContext } from '../context'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CancelIcon from '@mui/icons-material/Cancel';
function SideBar() {
  const {sidebar,isSidebar,currentUser,handleCloseSideBar} = useGlobalContext()

  return (
    <div className={isSidebar ? 'sidebar__conteiner showSidear':'sidebar__conteiner '}>
      <div className='sidebar__headers'>
        <AccountCircleIcon/>
        {currentUser ? currentUser.email: 'hello,username'}
      </div>
      <div className='sidebar__cross' onClick={handleCloseSideBar}><CancelIcon/></div>
      <div className='sidebar__contents'>
        {sidebar.map(side =>{
          return <div >
            <p>{side.page}</p>
            <div >{side.links.map(item=>{
              return <a href={item.url}>{item.icon}{item.label}</a>
            })}</div>
          </div>
        })}
      </div>
    </div>
  )
}

export default SideBar
