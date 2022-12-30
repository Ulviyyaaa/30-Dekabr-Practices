import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../Layout/Navbar'

function Service() {
  return (
    <>
    <Helmet>
      <title>Service</title>
      <meta name='description' content='React project' />
    </Helmet>
    <Navbar/>
    <h1>Service</h1>
    </>
  )
}

export default Service