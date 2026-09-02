import React from "react";



const projects = [
  {
    title: "Movie Explorer",
    image:
      "https://raw.githubusercontent.com/MeharYG-dev/Movie-Explorer/main/ME1.png",
    description:
      "A responsive movie discovery application that allows users to search, filter, sort, paginate, and manage movies in a personal watchlist.",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "OMDb API",
    ],
    github: "https://github.com/MeharYG-dev/Movie-Explorer",
  },

  {
    title: "Typing Speed Test",
    image:
      "https://raw.githubusercontent.com/MeharYG-dev/typing-speed-test-react/main/Typing_Speed.png",
    description:
      "An interactive typing speed application built with React that helps users practice typing and measure their typing performance.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Vite",
    ],
    github:
      "https://github.com/MeharYG-dev/typing-speed-test-react",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5">

          <h2 className="fw-bold text-primary">
            My Projects
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "650px" }}>
            A selection of projects that showcase my skills in React,
            JavaScript, responsive design, APIs, and modern web development.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="row g-4 justify-content-center">

          {projects.map((project) => (
            <div
              className="col-12 col-md-6"
              key={project.title}
            >

              {/* Project Card */}
              <div className="card project-card h-100 border-0 shadow-sm">

                {/* Project Image */}
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    className="card-img-top project-image"
                    alt={`${project.title} project screenshot`}
                  />
                </div>

                {/* Card Content */}
                <div className="card-body d-flex flex-column p-4">

                  {/* Project Title */}
                  <h5 className="card-title fw-bold mb-3">
                    {project.title}
                  </h5>

                  {/* Description */}
                  <p className="card-text text-muted">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4 mt-2">

                    {project.technologies.map((technology) => (
                      <span
                        className="badge rounded-pill text-bg-primary me-2 mb-2"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                  {/* GitHub Button */}
                  <div className="mt-auto">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-github me-2"></i>
                      View on GitHub
                    </a>

                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;