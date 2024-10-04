import React from 'react'
import './NotWishlist.scss'
import { GiShatteredHeart } from "react-icons/gi";
import { Link } from "react-router-dom";

function NotWishlist() {
  return (
    <section id='notWishlist'>
      Wishlist is Empty!
       <GiShatteredHeart  style={{fontSize:'90px'}}/>
       <Link className='link' to={'/'}>Go Home</Link>
    </section>
  )
}

export default NotWishlist