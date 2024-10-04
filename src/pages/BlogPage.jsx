import React from 'react'
import {Helmet} from "react-helmet";
import NotPage from '../components/NotPage';

function BlogPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
      </Helmet>
      <NotPage/>
    </>
  )
}

export default BlogPage