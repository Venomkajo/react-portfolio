import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

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