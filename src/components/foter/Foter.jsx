import React from 'react'
import './Foter.css'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import logo from '../../assets/logobag.png'
function Foter() {
  return (
    <div className='foter-container'>
        <div className='top'>
            <p>Buy product from  online </p>
            <div className='social-link'>
                <Link to={"/"}><CiFacebook className='icon'/></Link>
                <Link to={"/"}><FaInstagram className='icon'/></Link>
                <Link to={"/"}><RiTwitterXLine className='icon'/></Link>
            </div>
        </div>
        <div className='bottom'>
            <div className='I'>
            <div className='I-top'>
            <img src={logo} alt='🎽' />
            <span>FakeeFy</span>
            </div>
            <p className='I-des'>Shope online Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, alias esse maxime a neque rem labore autem ipsa voluptas sequi unde deserunt porro maiores quam.</p>
            </div>
            <div className='II'></div>
            <div className='II'></div>
        </div>

    </div>
  )
}

export default Foter