import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        <div className="project-card">
          <h3>React Portfolio Website</h3>
          <p>
            A personal portfolio website built using React to showcase my
            skills, projects, and contact details. Fully responsive and
            component-based.
          </p>
        </div>

        <div className="project-card">
          <h3>Upcoming Project</h3>
          <p>
            This section will include more real-world projects as I continue to
            learn and grow as a frontend developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
