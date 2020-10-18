import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const [active, setActive] = useState(false);
  const clicked = () => {
    setActive(!active);
  };

  return (
    <header className="Header">
      <h1>ROOPCHAND</h1>
      <nav
        className={active ? "nav-list active" : "nav-list"}
        onClick={clicked}
      >
        <div className={active ? "hamburger active" : "hamburger"}>
          <div class="bar"></div>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
