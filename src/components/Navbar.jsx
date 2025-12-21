import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Vinayak</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
