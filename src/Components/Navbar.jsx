import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleNavbar = () => {
    setIsOpen(!isOpen); 
  };

  const closeNavbar = () => {
    setIsOpen(false); 
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top shadow-sm">
      <div className="container-fluid px-4">
        <Link className="navbar-brand text-white fw-bold" to="/">
          MyPortfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar} 
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className="nav-link text-info" to="/" onClick={closeNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info" to="/about" onClick={closeNavbar}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info" to="/projects" onClick={closeNavbar}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info" to="/contact" onClick={closeNavbar}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
