import React from 'react'
import {Helmet} from "react-helmet";
import NotPage from '../components/NotPage';

function CasePage() {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Case</title>
    </Helmet>
    <NotPage/>
  </>
  )
}

export default CasePage