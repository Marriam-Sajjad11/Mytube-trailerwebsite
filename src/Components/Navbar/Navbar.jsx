import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
      <div className="logo">
        <img src="images/ytlogo.png" alt="Logo" />
        <h1>MyTube</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search-Movie" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="user-avatar">
        <img src="images/girl.avif" alt="User Avatar" />
      </div>
    </nav>
    </div>
  )
}

export default Navbar
