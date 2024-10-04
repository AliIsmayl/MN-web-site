import React, { useContext } from 'react'
import { Helmet } from "react-helmet";
import { WishlisContext } from '../../context/WishlistContext';
import NotMean from '../../components/NotMean';
import './WishlistPage.scss'
import { MdDelete } from "react-icons/md";
import NotWishlist from '../../components/NotWishlist';

function Wishlistpage() {
  const { wishlist, handleDeleteWishlist , handleAllDelete } = useContext(WishlisContext)

  return (
    <>
      <NotMean />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
      </Helmet>
      <div className="wishlistPage">
        {wishlist.length === 0 ? <NotWishlist/> :""}
       <>
       {wishlist.length === 0 ? "" : <button className='deleteBtn' onClick={handleAllDelete}>All Delete</button>}
      
        {
          wishlist && wishlist.map((item) => (
            <div className="wishlistCart">
              <img src={item.image} alt="" />
              <div className='TextAndBtnBox'>
                <div className="text">
                  <p>{item.name}</p>
                  <p>{item.comment}</p>
                  <p>Price: {item.price}$</p>
                </div>
                <div className="btn">
                  <button onClick={() => handleDeleteWishlist(item._id)}><MdDelete /></button>

                </div>
              </div>
            </div>
            
          ))
        }
       </>
      </div>
    </>
  )
}

export default Wishlistpage