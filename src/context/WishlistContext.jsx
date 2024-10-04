import React, { createContext, useEffect, useState } from 'react'

export const WishlisContext=createContext() 
function WishlistProvider({children}) {
const [wishlist, setwishlist] = useState(localStorage.getItem("wishlist")? JSON.parse(localStorage.getItem("wishlist")):[])
    
useEffect(() => {
localStorage.setItem('wishlist',JSON.stringify(wishlist))
}, [wishlist])


function handleAddWishlist(x) {
    const wishlistProduct=wishlist.find((item)=>item._id === x._id)
    if (wishlistProduct) {
    setwishlist(wishlist.filter((item)=>item._id !==x._id))
        
    }
    else{
    setwishlist([...wishlist , x])
        }
}
function handleDeleteWishlist(id) {
    setwishlist(wishlist.filter((x)=>x._id !== id))
}

function handleAllDelete() {
    setwishlist([])
}
    const data={
        wishlist,
        setwishlist,
        handleDeleteWishlist,
        handleAddWishlist,
        handleAllDelete
    }
  return (
    <WishlisContext.Provider value={data}>
        {children}
    </WishlisContext.Provider>
  )
}

export default WishlistProvider