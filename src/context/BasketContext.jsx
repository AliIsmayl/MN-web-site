import React, { createContext, useEffect, useState } from 'react'

export const BasketContext=createContext() 
function BasketProvider({children}) {
const [basket, setBasket] = useState(localStorage.getItem("basket")? JSON.parse(localStorage.getItem("basket")):[])
    
useEffect(() => {
localStorage.setItem('basket',JSON.stringify(basket))
}, [basket])



function handleAddBasket(x) {
    const basketProduct=basket.find((item)=>item._id === x._id)
    if (basketProduct) {
     basketProduct.count++
     basketProduct.total=basketProduct.count* basketProduct.price
     return
    }
    else{
        const total=x.price
        setBasket([...basket , {...x , count:1 , total : total}])
        }
}
function handleDeleteBasket(id) {
    setBasket(basket.filter((x)=>x._id !== id))
}

function handleAllDelete() {
    setBasket([])
}
function handleCountAdd(isAdd, id) {
    const findData=basket.find((x)=>x._id === id)
    if (isAdd) {
        findData.count++
        findData.total=findData.count * findData.price
        setBasket([...basket])
    }
    else{
        if (findData.count === 1) {
            setBasket(basket.filter((x)=>x._id !== id))
        }
       else{
        findData.count--
        findData.total=findData.count* findData.price
        setBasket([...basket])
       }
    }
}
    const data={
        basket,
        setBasket,
        handleDeleteBasket,
        handleAddBasket,
        handleAllDelete,
        handleCountAdd
    }
  return (
    <BasketContext.Provider value={data}>
        {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider