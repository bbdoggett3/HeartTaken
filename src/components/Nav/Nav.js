import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="page-top">
      <nav className="navbar-container">
        <div className="navbar">
          <img
            className=" site-logo"
            src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FHeart%20Taken%20logo.png?v=1592502714640"
            alt="logo to Heart Taken site"
          ></img>

          <div className="navbar-selection-container">
            <ul className="navbar-selection">
              <li className="nav-item">Features</li>
              <li className="nav-item"> |</li>
              <li className="nav-item">About</li>
              <li className="nav-item"> |</li>
              <li className="nav-item">Contact</li>
              <li className="nav-item"> |</li>
              <li className="nav-item">Register</li>
              <li className="nav-item"> |</li>
              <li className="nav-item">Sign in</li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Nav;
