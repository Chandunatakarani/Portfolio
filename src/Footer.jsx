import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Navbar.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p>&copy; 2025 Chandu. All rights reserved.</p>
        <div className="mt-3 ">
          <a 
            href="https://github.com/chandunatakarani" 
            className=" me-3 footer-link"
          >
            <i className="bi bi-github"></i> GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/chandu-natakarani" 
            className=" me-3 footer-link"
          >
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
          <a 
            href="mailto:chandunatakarani@gmail.com" 
            className=" footer-link"
          >
            <i className="bi bi-envelope"></i> Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
