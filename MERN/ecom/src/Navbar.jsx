import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <Link to="/show">Show</Link>
        <Link to="/">Add Product</Link>
    </div>
  )
}

export default Navbar