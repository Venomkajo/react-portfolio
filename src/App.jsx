import React from 'react';
import './App.css';

// --- Navigation Component ---
const Navbar = () => (
  <nav className="navbar">
    <div className="nav-logo">StudentName.dev</div>
    <ul className="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

// --- Hero Component ---
const Hero = () => (
  <section className="hero">
    <h1>Hi, I'm <span style={{color: 'var(--primary-color)'}}>Alex Doe</span></h1>
    <p>A Computer Science student passionate about building clean, functional, and user-centric web applications.</p>
    <a href="#projects" className="btn">View My Work</a>
  </section>
);

// --- About Component ---
const About = () => (
  <section id="about">
    <h2 className="section-title">About Me</h2>
    <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
      <p>
        I am currently a junior at <strong>University of Technology</strong>. 
        I love solving complex problems and learning new frameworks. 
        My goal is to become a Full Stack Developer and contribute to open-source projects.
      </p>
      <div style={{marginTop: '2rem', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap'}}>
        {['React', 'JavaScript', 'Python', 'Node.js', 'CSS', 'Git'].map(skill => (
          <span key={skill} style={{background: '#e2e8f0', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem'}}>{skill}</span>
        ))}
      </div>
    </div>
  </section>
);

// --- Projects Component ---
const Projects = () => {
  const projectData = [
    {
      title: "E-Commerce Site",
      desc: "A fully functional store built with React and Firebase.",
      link: "#",
      img: "https://via.placeholder.com/300x200"
    },
    {
      title: "Weather App",
      desc: "Real-time weather forecasting using OpenWeather API.",
      link: "#",
      img: "https://via.placeholder.com/300x200"
    },
    {
      title: "Task Manager",
      desc: "A productivity tool to track daily goals and deadlines.",
      link: "#",
      img: "https://via.placeholder.com/300x200"
    },
  ];

  return (
    <section id="projects" style={{background: '#fff'}}>
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.img} alt={proj.title} className="project-img" />
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <a href={proj.link} className="btn" style={{padding: '0.5rem 1rem', fontSize: '0.8rem'}}>View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Contact Component ---
const Contact = () => (
  <section id="contact">
    <h2 className="section-title">Get In Touch</h2>
    <div className="contact-container">
      <p>I'm currently looking for internship opportunities!</p>
      <div className="social-links">
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
        <a href="mailto:email@example.com">Email</a>
      </div>
    </div>
  </section>
);

// --- Main App Component ---
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer>
        <p>&copy; {new Date().getFullYear()} Student Name. All rights reserved.</p>
      </footer>
    </div>
  );
}