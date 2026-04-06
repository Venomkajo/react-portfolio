import projectData from '../assets/projects.json';

// --- Projects Component ---
const Projects = () => {
  return (
    <section id="projects" style={{background: '#fff'}}>
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.img} alt={proj.title} className="project-img" />
            <div className="project-info">
              <h3>{proj.title} - {proj.date}</h3>
              <p>{proj.desc}</p>
              <a href={proj.link} className="btn" style={{padding: '0.5rem 1rem', fontSize: '0.8rem'}}>View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;