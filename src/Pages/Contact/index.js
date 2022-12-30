import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../Layout/Navbar'
import "./index.scss"
function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name='description' content='React project' />
      </Helmet>
      <Navbar />
      <div className='mainContac'>
        <div className='contac'>
          <h4>Let's Get In Touch!</h4>
          <p>Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>
          <input placeholder="Full name" type="text" class="inp" />
          <input placeholder="Email address" type="text" class="inp" />
          <input placeholder="Phone number" type="text" class="inp" />
          <input placeholder="Message" type="text" class="inp" />
          <button id="btn">Submit</button>
        </div>
      </div>
    </>
  )
}

export default Contact