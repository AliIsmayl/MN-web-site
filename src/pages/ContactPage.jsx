import React from 'react'
import {Helmet} from "react-helmet";
import NotPage from '../components/NotPage';

function ContactPage() {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Contact</title>
    </Helmet>
    <NotPage/>
  </>
  )
}

export default ContactPage