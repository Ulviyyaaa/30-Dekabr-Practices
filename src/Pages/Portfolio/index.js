import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../Layout/Navbar'

function Portfolio() {
  return (
    <>
    <Helmet>
      <title>Portfolio</title>
      <meta name='description' content='React project' />
    </Helmet>
    <Navbar/>
    <h1>Portfolio</h1>
    </>
  )
}

export default Portfolio