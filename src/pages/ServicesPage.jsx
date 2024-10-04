import React from 'react'
import {Helmet} from "react-helmet";
import NotPage from '../components/NotPage';

function ServicesPage() {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Services</title>
    </Helmet>
    <NotPage/>
  </>
  )
}

export default ServicesPage