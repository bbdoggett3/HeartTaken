import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


function Nav(props) {

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
              <Link to="/features"><li className="nav-item">Features</li></Link>
              <li className="nav-item"> |</li>
              <Link to="/about"><li className="nav-item">About</li></Link>
              <li className="nav-item"> |</li>
              <Link to="/contact"><li className="nav-item">Contact</li></Link>
              <li className="nav-item"> |</li>
              {props.isLoggedIn
              ? <Link to="/"><li className="nav-item">Home</li></Link>
              : <Link to="register"><li className="nav-item">Register</li></Link>}
              <li className="nav-item"> |</li>
              {props.isLoggedIn
              ? <Link to="profileUpdate"><li className="nav-item"><img  className="nav-profile-pic" src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fme.jpg?v=1569425179160" alt="profile"/></li></Link>
              : <Link to="signIn"><li className="nav-item">Sign in</li></Link> }
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
}

const mapToStateProps = reduxState => reduxState

export default connect(mapToStateProps)(Nav);
