import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
function Navbar() {
  return (
    <nav>
      <div className='mainNav'>
        <div className='navIcon'>
          <h3>Start Bootstrap</h3>
        </div>
        <div className='burgerMenu'>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className='links'>
          <ul>
            <NavLink to={"/about"} className="nav-link" ><p>About</p></NavLink>
            <NavLink to={"/service"} className="nav-link" ><p>Service</p></NavLink>
            <NavLink to={"/portfolio"} className="nav-link" ><p>Portfolio</p></NavLink>
            <NavLink to={"/contact"} className="nav-link" ><p>Contact</p></NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar