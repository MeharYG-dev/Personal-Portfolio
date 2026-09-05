import React from 'react';

function Footer() {
  return (
    <footer className="footer-section py-4">
      <div className="container text-center">

        <h5 className="fw-bold">
          Meharunnisa
        </h5>

        <p className="text-muted mb-3">
          Frontend Developer
        </p>

        <div className="mb-3">

          <a
            href="https://github.com/MeharYG-dev"
            target="_blank"
            rel="noreferrer"
            className="footer-icon"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="mailto:mshayg786@gmail.com"
            className="footer-icon"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>

        </div>

        <p className="mb-0 text-muted">
          &copy; 2026 Meharunnisa. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;