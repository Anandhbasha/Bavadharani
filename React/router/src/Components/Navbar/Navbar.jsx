import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='Navbar'>
        <Link to="/">Allproducts</Link>
        <Link to="/mens">Mens</Link>
        <Link to="/womens">Womens</Link>
        <Link to="/kids">Kids</Link>
    </div>
  )
}

export default Navbar