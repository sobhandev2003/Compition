import './Nav.css'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { BsCartCheck } from "react-icons/bs";
import logo from '../../assets/logobag.png'
import { CgToolbarLeft } from "react-icons/cg";
function Nav() {
  const { innerWidth: width, innerHeight: height } = window;
  const [isShow,setIsShow]=useState(false)
  // console.log({ height, width });
  const [isMobile,setIsMobile]=useState(false);
  
  useEffect(()=>{
    if(width<651){
      setIsMobile(true)
    }
  },[width])
  return (
    <div className='nav-main-container'>
      <nav>
      {
        !isMobile?<>
          <div className='logo'>
          <img src={logo} alt='🎽' />
        </div>
        <div className='center-route-container'>
          <NavLink to={"/"}><AiOutlineHome /><span>Home</span></NavLink>
          <NavLink to={"/about"}><BsInfoCircle /><span>About</span></NavLink>
          <NavLink to={"/contact"}><IoCallOutline /><span>Contact</span></NavLink>
          <NavLink to={"/cart"}><BsCartCheck /><span>Cart</span></NavLink>
        </div>
        <div className='auth-container'>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
        </div></>:<>
        <div className='logo'>
          <img src={logo} alt='🎽' />
         </div>
          <div className='togole-div'>
            <div className='togole-btn-div'>
            <CgToolbarLeft onClick={()=>setIsShow(true)} className='toggle-btn'/>
            </div>
            {
              isMobile && isShow && <div className='togole-details-div'>
               {/* <div className=''> */}
          <NavLink to={"/"}><AiOutlineHome /><span>Home</span></NavLink>
          <NavLink to={"/about"}><BsInfoCircle /><span>About</span></NavLink>
          <NavLink to={"/contact"}><IoCallOutline /><span>Contact</span></NavLink>
          <NavLink to={"/cart"}><BsCartCheck /><span>Cart</span></NavLink>
        {/* </div> */}
        {/* <div className='auth-container'> */}
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
        {/* </div> */}
              </div>
            }

          </div>
        </>
      }
      </nav>

    </div>
  )
}

export default Nav