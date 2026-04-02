import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      
      <Link to="/home">Home</Link> {" | "}
      <Link to="/mobile">Mobiles</Link> {" | "}
      <Link to="/fashion">Fashion</Link> {" | "}
    </div>
  )
}

export default Navbar
