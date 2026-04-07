import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

// --- Main App Component ---
export default function App() {

  const [darkMode, setDarkMode] = useState((localStorage.getItem('darkMode') === 'true') || false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer>
        <p>&copy; {new Date().getFullYear()} Kajetan Respondek at <a href='https://github.com/Venomkajo' target='_blank' rel='noopener noreferrer'>GitHub</a>.</p>
      </footer>
    </div>
  );
}