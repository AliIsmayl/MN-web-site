import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';
import NotMean from '../../components/NotMean';
import './DetailPage.scss'

function DetailPage() {
  const { id } = useParams()
  const [detail, setDetail] = useState()

  async function DetailFunc() {
    const res = await axios.get(`http://localhost:3000/examPart4/${id}`)
    setDetail(res.data)
  }
  
  useEffect(() => {
    DetailFunc()
  }, [])


  return (
    <>
    <NotMean/>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Detail</title>
      </Helmet>
      <div className="detailPage">
      {
        detail ?
          <>
          <img src={detail.image} alt="" />
           <div className="textBox">
           <p>{detail.name}</p>
           <p>{detail.comment}</p>
           <p>Price: {detail.price}$</p>
           </div>
          </>
          : ""
      }
      </div>
    </>
  )
}

export default DetailPage