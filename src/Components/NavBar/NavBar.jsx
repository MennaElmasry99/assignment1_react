import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function NavBar() {
  return<>
<nav className="navbar navbar-expand-lg py-3">
  <div className="container">
    <a className="navbar-brand text-white fw-bold fs-3" href="#">START FRAMEWORK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link fw-bolder text-white" aria-current="page" to="/about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bolder text-white mx-3" aria-current="page" to="/portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-bolder text-white" aria-current="page" to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    
    </div>
  </div>
</nav>



  </>
}

export default NavBar