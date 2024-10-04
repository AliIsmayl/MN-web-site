import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import NotMean from '../../components/NotMean'
import './AddPage.scss'

function AddPage() {
  const [product, setProduct] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(null)

  async function GetData() {
    const res=await axios.get("http://localhost:3000/examPart4")
    setProduct(res.data)
  }

  async function handleDelete(id) {
    await axios.delete(`http://localhost:3000/examPart4/${id}`)
    GetData()
  }

  useEffect(() => {
    GetData()
  }, [])
  
  return (
    <>
    <NotMean/>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
      </Helmet>
<section id="addPage">
<Formik
        initialValues={{ image: '', name: '', comment: '', price: '' }}
        validationSchema={Yup.object({
          image: Yup.string()
            .required('Required'),
          name: Yup.string()
          .matches(/^[a-zA-Z ]+$/, 'Please Enter String Text')
            .required('Required'),
          price: Yup.string()
            .required('Required'),
          comment: Yup.string()
          .matches(/^[a-zA-Z ]+$/, 'Please Enter String Text')
            .required('Required'),
        })}
        onSubmit={async (values, { setSubmitting , resetForm }) => {
          try {
            await axios.post("http://localhost:3000/examPart4", values)
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm()
    GetData()
                                  
          } catch (error) {

          }
        }}
      >
        <Form>
          <label htmlFor="firstName">Image</label>
          <Field name="image" type="text" />
<div className="error"> <ErrorMessage name="image" /></div>

          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <div className="error">  <ErrorMessage name="name" /></div>

          <label htmlFor="comment">Comment</label>
          <Field name="comment" type="text" />
          <div className="error"> <ErrorMessage name="comment" /></div>

          <label htmlFor="price">Price</label>
          <Field name="price" type="number" />
          <div className="error"> <ErrorMessage name="price" /></div>

          <button type="submit">Add</button>
        </Form>
      </Formik>
      <table>

  <thead>
    <tr>
      <th>Name</th>
      <th>Image</th>
      <th>Price</th>
      <th>Comment</th>
      <th>Delete</th>
    </tr>
  </thead>
 
  <tbody>
  {
    product && product
    .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a,b) =>{
      if (sort && sort.asc === true) {
        return  (a[sort.property] > b[sort.property]) ? 1 : ((b[sort.property] > a[sort.property]) ? -1 : 0)
      }
      else if (sort && sort.asc === false) {
        return  (a[sort.property] < b[sort.property]) ? 1 : ((b[sort.property] < a[sort.property]) ? -1 : 0)
        
      }
      else{
        return 0
      }
    })
    .map((item)=>(
      <tr>
      <td>{item.name}</td>
      <td><img src={item.image} alt="" /></td>
      <td>{item.price}$</td>
      <td>{item.comment}</td>
      <td><button onClick={()=>handleDelete(item._id)}>Delete</button></td>
    </tr>
    ))
  }
   
  </tbody>
</table>
<div className="searchBox">
<input type="text" placeholder='Search' onChange={(e)=>setSearch(e.target.value)} />
<div className="btnsBox">
<button onClick={()=>setSort({property:"price", asc:true})}>A-z(Price)</button>
<button onClick={()=>setSort({property:"price", asc:false})}>Z-a(Price)</button>
<button onClick={()=>setSort(null)}>Default</button>
</div>
</div>
</section>

    </>
  )
}

export default AddPage