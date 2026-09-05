import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        {/* Portfolio Name */}
        <a className="navbar-brand fw-bold text-primary" href="#home">
          Meharunnisa
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <div className="navbar-nav ms-auto">

            <a className="nav-link" href="#home">
              Home
            </a>

            <a className="nav-link" href="#about">
              About
            </a>

            <a className="nav-link" href="#skills">
              Skills
            </a>

            <a className="nav-link" href="#projects">
              Projects
            </a>

            <a className="nav-link" href="#contact">
              Contact
            </a>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;