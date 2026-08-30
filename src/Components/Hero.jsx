import React from 'react'
import heroImage from '../assets/Hero_Profile_Image.jpeg'

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100 py-5">

          <div className="col-lg-7">
            <p className="text-primary fw-bold mb-2">
              Hello, I'm
            </p>

            <h1 className="display-2 fw-bold mb-3">
              Meharunnisa
            </h1>

            <h2 className="h3 mb-3">
              Frontend Developer
            </h2>

            <p className="lead hero-description mb-4">
              I build responsive and user-friendly web applications
              using HTML, CSS, JavaScript, React, and Bootstrap.
            </p>

            <a href="#projects" className="btn btn-primary px-4 py-2 me-2">
              View My Projects
            </a>

            <a href="#contact" className="btn btn-outline-primary px-4 py-2">
              Contact Me
            </a>
          </div>

          <div className="col-lg-5 text-center">
            <div className="hero-image-placeholder rounded-circle mx-auto">
              <img
                src={heroImage}
                alt="Meharunnisa - Frontend Developer"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero