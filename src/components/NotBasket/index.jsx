import React from 'react'
import './NotBasket.scss'
import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";

function NotBasket() {
  return (
    <section id='notBasket'>
      Basket is Empty!
       <BsCartX  style={{fontSize:'90px'}}/>
       <Link className='link' to={'/'}>Go Home</Link>
    </section>
  )
}

export default NotBasket