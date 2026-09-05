import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">
            Contact Me
          </h2>

          <p className="text-muted">
            Have a project in mind? Feel free to get in touch.
          </p>
        </div>

        {/* Contact Content */}
        <div className="row g-5">

          {/* Contact Information */}
          <div className="col-lg-5">

            <h3 className="fw-bold mb-4">
              Get In Touch
            </h3>

            <p className="text-muted">
              I'm always open to discussing new projects,
              creative ideas, or opportunities to be part of
              your vision.
            </p>

            {/* Email */}
            <div className="d-flex align-items-center mb-4">
              <i className="bi bi-envelope-fill fs-4 text-primary me-3"></i>

              <div>
                <h6 className="fw-bold mb-1">Email</h6>
                <p className="mb-0 text-muted">
                  mshayg786@gmail.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="d-flex align-items-center mb-4">
              <i className="bi bi-geo-alt-fill fs-4 text-primary me-3"></i>

              <div>
                <h6 className="fw-bold mb-1">Location</h6>
                <p className="mb-0 text-muted">
                  India
                </p>
              </div>
            </div>

            {/* GitHub */}
            <div className="d-flex align-items-center">
              <i className="bi bi-github fs-4 text-primary me-3"></i>

              <div>
                <h6 className="fw-bold mb-1">GitHub</h6>
                <a
                  href="https://github.com/MeharYG-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  github.com/MeharYG-dev
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="col-lg-7">

            <form>

              {/* Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>

                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary"
              >
                <i className="bi bi-send-fill me-2"></i>
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;