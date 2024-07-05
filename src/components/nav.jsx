import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../App.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container">
        <div className="Header-container">
            <h1 className="Header"> HussainFitness</h1>
        </div>
      <nav className="nav">
        <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`menu-links ${isOpen ? 'open' : 'collapsed'}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          <Link to="/WorkoutPlanner" className={location.pathname === "/WorkoutPlanner" ? "active" : ""}>Workout Planner</Link>
          <Link to="/Contact" className={location.pathname === "/Contact" ? "active" : ""}>Contact</Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
