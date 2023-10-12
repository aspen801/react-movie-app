import React from 'react'
import './navbar.scss'

import logo from '/assets/movieslogo.svg'
import homeIcon from '/assets/home.svg'
import movieIcon from '/assets/movie.svg'
import tvshowIcon from '/assets/tvshow.svg'

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
        <img src={movieIcon} alt="" />
      </div>
      <div className='navbar__nav-element'>
        <img src={tvshowIcon} alt="" />
      </div>
    </div>
  )
}

export default Navbar