import React, { useContext } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { PassingValue } from '../../App'
const Navbar = () => {
  const {count} = useContext(PassingValue)
  return (
    <div className='Navbar'>
        <Link to="/">Allproducts</Link>
        <Link to="/mens">Mens</Link>
        <Link to="/womens">Womens</Link>
        <Link to="/kids">Kids</Link>
        <p style={{color:"white"}}>Cart{count}</p>
    </div>
  )
}

export default Navbar