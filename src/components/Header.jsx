import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import logo from '../assets/uni-life-logo.png'
import shortlist from '../assets/shortlist.png'
import contactUs from '../assets/contact-us.png'

function Header() {
  return (
    <div className='header'>
    <div className='header-title'>
        <Link to="/" className='homepage-logo'><img src={logo} alt="logo" /></Link></div>
        <div className='header-nav'>
            <Link to="/Short-list"><img src={shortlist} alt="shortlist"/></Link>
            <Link to="/contact"><img src={contactUs} /></Link>
      </div>
    
  </div>
  )
}

export default Header