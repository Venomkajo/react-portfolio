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
          <span key={skill} style={{padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem'}}>{skill}</span>
        ))}
      </div>
    </div>
  </section>
);

export default About;