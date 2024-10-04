import React, { useContext, useEffect, useState } from 'react'
import './OurCaseSection.scss'
import axios from 'axios'
import { Link } from "react-router-dom";
import { WishlisContext } from '../../context/WishlistContext';
import NotMean from '../NotMean';
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BasketContext } from '../../context/BasketContext';
import { BsCartPlus } from "react-icons/bs";
import { BsCartCheck } from "react-icons/bs";

function OurCaseSection() {
  const [product, setProduct] = useState([])
const {handleAddBasket , basket}=useContext(BasketContext)
  const {handleAddWishlist , wishlist}=useContext(WishlisContext)
  async function getProduct() {
    const res = await axios.get("http://localhost:3000/examPart4")
    setProduct(res.data)
  }
  useEffect(() => {
    getProduct()
  }, [])

  return (
    <section id='ourCaseSection'>
      <div className="upBox">
        <p>OUR CASE STUDY</p>
        <h1>We work with global brands</h1>
      </div>
      <div className="downBox">
        {
          product && product.map((item) => (
            <div className="cart">
              <Link to={`/detail/${item._id}`}>       
               <img src={item.image} alt="" />
               </Link>
               <button onClick={()=>handleAddWishlist(item)}>
                {
                  wishlist.find((x)=>x._id === item._id) ? <AiFillHeart /> :< AiOutlineHeart /> 
                }
               </button>
               <button className='basketBtn' onClick={()=>handleAddBasket(item)}>
                {
                  basket.find((x)=>x._id === item._id)?<BsCartCheck /> : < BsCartPlus />
                }
               </button>
              <h3>{item.name}</h3>
              <p>{item.comment}</p>
            </div>

          ))
        }


      </div>
    </section>
  )
}

export default OurCaseSection