import React from 'react'
import logo from '../../assets/images/logo.png'
import { NavLink, Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import userImg from '../../assets/images/avatar-icon.png'
import {BiMenu} from 'react-icons/bi'
const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
    },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
    }

]



const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleSitckyHeader = () =>{
    window.addEventListener('scroll', () =>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }
  useEffect(()=>{
    handleSitckyHeader()
    return ()=> window.removeEventListener('scroll', handleSitckyHeader)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show_:menu')

  return <header className='header flex items-center' ref={headerRef}>
    <div className="container">
      <div className='flex items-center justify-between'>
        {/*logo*/}
        <div>
          <img src={logo} alt="" />
        </div>

        {/* menu */}
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <ul className="menu flex items-center gap-[2.2rem]">
            {
              navLinks.map((link, index)=><li key={index}>
                <NavLink to={link.path} className={navClass=> navClass.isActive ? 'text-primaryColor text-[16px] font-[600]' : 
              'text-textColor text-[16px] font-[500] hover:text-primaryColor'}>{link.display}
                </NavLink>
              </li> )
            }
          </ul>
        </div>
        
        {/*nav right*/}
        <div className="flex items-center gap-4">
          <div className='hidden'>
            <Link to='/'>
              <figure className='w-[35px] h-[35px] rounded-full'>
                <img src={userImg} className='w-full rounded-full' alt='icon' />
              </figure>
             </Link> 
             </div>

             <Link to='/login'>
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">Login</button>
             </Link>
             <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
             </span>
          
        </div>
      </div>
    </div>
  </header>
    
  
}

export default Header