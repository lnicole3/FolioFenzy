import React from 'react'
import { Link } from 'react-router-dom'
import img from '../images/artfolio_logo_black.png'
const Nav = () => {
  return (
    <div className='nav'>  
       <Link className="logo" to="/">
          <img className="logo" src={img} alt="App Logo" />
        </Link>
    <ul className='nav-links'>
    <Link to="/artists" style={{textDecoration: 'none'}}>Artists</Link>
    <Link to="/gallery"style={{textDecoration: 'none'}}>Gallery</Link>
    </ul>
    </div>
  )
}

export default Nav