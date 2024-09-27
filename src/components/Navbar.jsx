import React from "react";
import "./Navbar.css"; // Make sure to create a corresponding CSS file for
import userState from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Bambi Portfolio</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
