import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">👥</span>
        <span>TeamHub</span>
      </div>

      <div className="nav-links">
        <a href="#" className="active">Home</a>
        <a href="#">Our Team</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
