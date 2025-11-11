import projects from "./projectsData";

function Projects() {
  return (
    <div className="page-container">
      <h1>Projects</h1>

      {projects.map((project, index) => (
        <div key={index} style={{
          border: "1px solid #333",
          margin: "20px auto",
          padding: "15px",
          width: "70%",
          background: "#1a1a1a",
          borderRadius: "8px"
        }}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>

          <strong>Skills: </strong>
          <span>{project.skills.join(", ")}</span>

          <div style={{ marginTop: "10px" }}>
            <a href={project.link} target="_blank" rel="noreferrer" style={{ color: "#61dafb" }}>
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
