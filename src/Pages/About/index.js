import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../Layout/Navbar'

function About() {
  return (
    <>
    <Helmet>
      <title>About</title>
      <meta name='description' content='React project' />
    </Helmet>
    <Navbar/>
    <h1>About</h1>
    </>
  )
}

export default About