import React from 'react'

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">
            About Me
          </h2>
        </div>

        <div className="row align-items-center">

          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <div className="about-icon mx-auto">
              <span>💻</span>
            </div>
          </div>

          <div className="col-lg-7">
            <h3 className="fw-bold mb-3">
              I'm a Frontend Developer
            </h3>

            <p className="lead">
              I am passionate about creating clean, responsive,
              and user-friendly websites and web applications.
            </p>

            <p>
              I enjoy turning ideas into interactive digital
              experiences using modern frontend technologies.
              I continuously learn new technologies and improve
              my development skills by building real-world projects.
            </p>

            <div className="row mt-4">

              <div className="col-sm-6">
                <p>
                  <strong>Name:</strong> Meharunnisa
                </p>

                <p>
                  <strong>Role:</strong> Frontend Developer
                </p>
              </div>

              <div className="col-sm-6">
                <p>
                  <strong>Technologies:</strong> HTML, CSS, JavaScript, React,
                  <br />
                  <span className="python-indent">Python</span>
                </p>

                <p>
                  <strong>Frameworks:</strong> Bootstrap, Tailwind CSS
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About