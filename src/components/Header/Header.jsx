import React from 'react'
import './header.scss'

import textLogo from '/assets/textlogo.svg'
import bookmark from '/assets/bookmark.svg'
import search from '/assets/search.svg'

const Header = () => {
  return (
    <header className='header__main-wrapper'>
        <div className='header__logo'>
          
          <img src={textLogo} alt="" />
        </div>
        <div className='header__search-input'>
          <img className='search-icon' src={search} alt="" />
          <input type="text" placeholder="Search something..."/>
        </div>
        <div className='header__right-menu'>
          <div className='header__right-menu-favourites'>
            <img src={bookmark} alt="" />
          </div>
          <div className='header__right-menu-profile'>
            <p>Log in</p>
          </div>
        </div>
    </header>
  )
}

export default Header