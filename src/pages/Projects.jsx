import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        <div className="project-card">
          <div className="project-card">
            <h3>React Portfolio Website</h3>
            <p>
              A fully responsive personal portfolio built using{" "}
              <strong>React.js</strong>, designed to showcase projects,
              technical skills, and contact information with a clean and
              professional UI.
            </p>
            <p className="project-links">
              <a
                href="https://vinayakportfolio-b7baed.netlify.app"
                target="_blank"
              >
                Live Preview
              </a>{" "}
              |
              <a
                href="https://github.com/VinayakLengare/react-portfolio"
                target="_blank"
              >
                GitHub
              </a>
            </p>
          </div>

          <div className="project-card">
            <h3>Real-Time Weather Application</h3>
            <p>
              A React-based weather application that fetches real-time data from
              the
              <strong>OpenWeather API</strong>, implementing state management
              with React Hooks, input validation, and error handling.
            </p>
            <p className="project-links">
              <a href="https://weather-ab1e3e.netlify.app" target="_blank">
                Live Preview
              </a>{" "}
              |
              <a
                href="https://github.com/VinayakLengare/react-weather-app"
                target="_blank"
              >
                GitHub
              </a>
            </p>
          </div>

          <div className="project-card">
            <h3>Smart Expense Tracker</h3>
            <p>
              A simple expense tracking application that manages income and
              expenses, calculates balance in real time, and stores data using
              <strong>JavaScript Local Storage</strong> with a responsive UI.
            </p>
            <p className="project-links">
              <a href="https://expensetracker-fron.netlify.app/" target="_blank">
                Live Preview
              </a>{" "}
              |
              <a href="https://github.com/VinayakLengare/smart-expense-tracker.git" target="_blank">
                GitHub
              </a>
            </p>
          </div>
          <div className="project-card">
            <h3>Task Management System</h3>
            <p>
              Developed a task management application with React for creating,
              updating, and tracking task status, integrated with REST APIs
              using Spring Boot.
            </p>
            <div className="project-links">
              
              <a href="https://github.com/VinayakLengare/Task-Management.git" title="GitHub repo available on request">
             GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
