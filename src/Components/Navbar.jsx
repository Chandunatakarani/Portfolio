import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Keep it for custom tweaks

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top shadow-sm">
      <div className="container-fluid px-4">
        <Link className="navbar-brand text-white fw-bold" to="/">
          MyPortfolio
        </Link>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link className="nav-link text-info" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-info" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
