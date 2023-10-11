import React from 'react'
import './navbar.scss'

import logo from '/assets/movieslogo.svg'
import homeIcon from '/assets/home.svg'

const Navbar = () => {
  return (
    <div className='navbar__main-wrapper'>
      <div className='navbar__nav-logo'>
        <img src={logo} alt="" />
      </div>
      <div className='navbar__nav-element'>
        <img src={homeIcon} alt="" />
      </div>
      <div className='navbar__nav-element'>
        Movies
      </div>
      <div className='navbar__nav-element'>
        Trending
      </div>
    </div>
  )
}

export default Navbar