import React, { useContext, useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { WishlisContext } from '../../context/WishlistContext';
import { BasketContext } from '../../context/BasketContext';

function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false)

  function handleOpenNavbar() {
    setOpenNavbar(!openNavbar)
  }
const {basket}=useContext(BasketContext)
  const {wishlist}=useContext(WishlisContext)
  return (
  <div className='allNavbar'>
    <div className="upText">
    <p>Now Hiring: <span>Are you a driven and motivated 1st Line IT Support Engineer?</span></p>
    <div className="icons">
      <p> <FaFacebook /></p>
      <p><FaTwitter /></p>
      <p><FaLinkedinIn /></p>
      <p>  <FaYoutube /></p>
    </div>
  </div>
    <nav>
     
      <div className="iconBox">
     <Link className='link' to={"/"}>
     <img src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png" alt="" />
        </Link>
      </div>
      <ul>
        <li><Link className='link' to={"/"}>Home</Link></li>
        <li><Link className='link' to={"/about"}>About</Link></li>
        <li><Link className='link' to={"/blog"}>Blog</Link></li>
        <li><Link className='link' to={"/basket"}>Basket
{basket.length !== 0 ? <div className='line'><p>{basket.length}</p></div> :""}
        </Link></li>
        <li><Link className='link' to={"/add"}>Add</Link></li>
        <li><Link className='link' to={"/wishlist"}>
          Wishlist
{wishlist.length !== 0 ? <div className='line'><p>{wishlist.length}</p></div> :""}
        </Link></li>
      </ul>
    <div className='leftBox'>  <button>Free Quote</button>
      <div className="informBox">
        <div className="icon">
        <FaHeadphonesAlt />
        </div>
        <div className="textBox">
          <p>Have any Question?</p>
          <span>Call: 099 898 2004</span>
        </div>
      </div></div>
      <div className="menuBox" onClick={handleOpenNavbar}>
        <p>Menu  <IoMdMenu style={{fontSize:"40px"}}/></p>
    
      </div>
      <div className={`respNavbar ${openNavbar ? "openNavbar" :""}`}>
      <ul>
        <li><Link className='link' to={"/"}>Home</Link></li>
        <li><Link className='link' to={"/about"}>About</Link></li>
        <li><Link className='link' to={"/blog"}>Blog</Link></li>
        <li><Link className='link' to={"/basket"}>Basket</Link></li>
        <li><Link className='link' to={"/add"}>Add</Link></li>
        <li><Link className='link' to={"/wishlist"}>Wishlist</Link></li>
      </ul>
      </div>
      </nav>
  </div>
  )
}

export default Navbar