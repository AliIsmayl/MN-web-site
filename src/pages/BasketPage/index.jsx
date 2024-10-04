import React, { useContext } from 'react'
import './BasketPage.scss'
import { BasketContext } from '../../context/BasketContext'
import NotMean from '../../components/NotMean'
import NotBasket from '../../components/NotBasket'
import { MdDelete } from "react-icons/md";

function BasketPage() {
    const {basket ,handleDeleteBasket, handleCountAdd , handleAllDelete}=useContext(BasketContext)
    const subTotal=basket.reduce((initial, product)=>initial+parseInt(product.total) , 0)
  return (
  <>
    <NotMean/>

<div className='BasketPage'>
    { basket.length === 0 ? <NotBasket/> :''}
    { basket.length !== 0 ? <button className='basketDeleteBtn' onClick={handleAllDelete}>All Delete</button>:""}
    { basket.length !== 0 ? <div className='subtotal' >SubTotal: {subTotal}$</div>:""}

{
 basket && basket.map((item)=>(
    <div className="basketCart">
        
        <img src={item.image}></img>
        <p>{item.name}</p>
        <p>Price: {item.price}$</p>
        <p>{item.comment}</p>
       <p>Total: {item.total}$</p>
       <div className="count"> 
       <button onClick={()=>handleCountAdd(false, item._id)}>-</button>
        <p>{item.count}</p>
        <button onClick={()=>handleCountAdd(true, item._id)}>+</button>
        <button onClick={()=>handleDeleteBasket(item._id)}><MdDelete /></button>
        </div>
    </div>
 ))
}
</div>
  </>
  )
}

export default BasketPage