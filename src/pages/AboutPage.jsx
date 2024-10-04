import React from 'react'
import {Helmet} from "react-helmet";
import NotPage from '../components/NotPage';

function AboutPage() {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>About</title>
    </Helmet>
    <NotPage/>
  </>
  )
}

export default AboutPage