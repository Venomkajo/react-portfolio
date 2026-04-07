// --- Navigation Component ---
const Navbar = ({ darkMode, setDarkMode }) => (
  <nav className="navbar">
    <div className="nav-logo">Portfolio</div>
    <ul className="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
      <li>
        <a className="switch" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;