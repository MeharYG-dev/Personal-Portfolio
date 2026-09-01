const skills = [
  {
    name: "HTML5",
    level: 90,
    icon: "bi-filetype-html",
    type: "Frontend Skill",
  },
  {
    name: "CSS3",
    level: 85,
    icon: "bi-filetype-css",
    type: "Frontend Skill",
  },
  {
    name: "JavaScript",
    level: 80,
    icon: "bi-filetype-js",
    type: "Frontend Skill",
  },
  {
    name: "React",
    level: 80,
    icon: "bi-code-slash",
    type: "Frontend Skill",
  },
  {
    name: "Bootstrap",
    level: 85,
    icon: "bi-bootstrap",
    type: "Frontend Skill",
  },
  {
    name: "Git & GitHub",
    level: 80,
    icon: "bi-github",
    type: "Development Tool",
  },
];

function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">
            My Skills
          </h2>

          <p className="text-muted">
            Technologies I use to build modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="row justify-content-center g-4">

          {skills.map((skill) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={skill.name}
            >
              <div className="card shadow-sm h-100">

                <div className="card-body text-center">

                  {/* Icon */}
                  <i
                    className={`bi ${skill.icon} fs-1 text-primary`}
                  ></i>

                  {/* Skill Name */}
                  <h5 className="card-title mt-3">
                    {skill.name}
                  </h5>

                  {/* Badge */}
                  <span className="badge text-bg-primary mb-3">
                    {skill.type}
                  </span>

                  {/* Progress Information */}
                  <div className="d-flex justify-content-between mb-2">
                    <small>Proficiency</small>

                    <small className="fw-bold">
                      {skill.level}%
                    </small>
                  </div>

                  {/* Progress Bar */}
                  <div
                    className="progress"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{
                        width: `${skill.level}%`,
                      }}
                    ></div>
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

export default Skills;