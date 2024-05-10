import './Nav.css'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { BsCartCheck } from "react-icons/bs";
import logo from '../../assets/logobag.png'
function Nav() {
  return (
    <div className='nav-main-container'>
      <nav>
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
        </div>
      </nav>

    </div>
  )
}

export default Nav