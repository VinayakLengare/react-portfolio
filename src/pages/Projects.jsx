import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        <div className="project-card">
          <h3>React Portfolio Website</h3>
          <p>
            Built a fully responsive personal portfolio using React functional
            components, showcasing projects, skills, and professional UI.
          </p>
        </div>

        <div className="project-card">
          <h3>Real-Time Weather App</h3>
          <p>
            A React app fetching live weather data from OpenWeather API with
            state management using React Hooks, input validation, and error
            handling.
          </p>
        </div>
        <div className="project-card">
          <h3>Smart Expense Tracker</h3>
          <p>
            Tracks income and expenses, calculates balance in real-time using
            JavaScript and Local Storage, with a clean and responsive UI.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
