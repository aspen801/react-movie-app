import React from 'react'
import './navbar.scss'

import logo from '/assets/movieslogo.svg'

const Navbar = () => {
  return (
    <div className='navbar__main-wrapper'>
      <div className='navbar__nav-element'>
        <img src={logo} alt="" />
      </div>
      <div className='navbar__nav-element'>
        Home
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