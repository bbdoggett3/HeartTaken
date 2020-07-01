import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Nav(props) {
  const [isMobileOpen, setMobileOpen] = useState(false);

  const toggleMenuSelect = () => {
    setMobileOpen(!isMobileOpen);
  };

  return (
    <div className="page-top">
      <nav className="navbar-container">
        <div className="navbar">
          <img
            className=" site-logo"
            src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FHeart%20Taken%20logo.png?v=1592502714640"
            alt="logo to Heart Taken site"
          ></img>

          <button className="button-appear" onClick={toggleMenuSelect}>
            Menu{" "}
            {/* <img
              src="https://www.contentformula.com/blog/wp-content/uploads/2016/06/hamburger-menu.png"
              alt="hamburger icon for drop down me"
            ></img> */}
          </button>

          {props.isLoggedIn ? (
            <img
              className="profile-img-appear"
              src={props.profile_pic || "https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fprofile%20placeholder.png?v=1592859805428"}
              alt="profile"
            />
          ) : null}

          {/* MOBILE VIEW */}
          <div className="mobile-navbar-selection-container">
            <ul
              className={`mobile-navbar-selection ${
                isMobileOpen ? "mobile-nav-item-open" : null
              }`}
            >
              <Link style={{ textDecoration: "none" }} to="/features">
                {" "}
                <li className="mobile-nav-item">Features</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/about">
                {" "}
                <li className="mobile-nav-item">About</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/contact">
                {" "}
                <li className="mobile-nav-item">Contact</li>
              </Link>

              {props.isLoggedIn ? (
                <Link style={{ textDecoration: "none" }} to="/">
                  <li className="mobile-nav-item">Home</li>
                </Link>
              ) : (
                <Link style={{ textDecoration: "none" }} to="/register">
                  <li className="mobile-nav-item">Register</li>
                </Link>
              )}
              {props.isLoggedIn ? (
                <Link style={{ textDecoration: "none" }} to="/updateProfile">
                  <li className="mobile-nav-item"> Update Profile</li>
                </Link>
              ) : (
                <Link style={{ textDecoration: "none" }} to="/signIn">
                  <li className="mobile-nav-item">Sign In</li>
                </Link>
              )}
            </ul>
          </div>

          <div className="navbar-selection-container">
            <ul className="navbar-selection">
              <Link to="/features">
                <li className="nav-item">Features</li>
              </Link>
              <li className="nav-item"> |</li>
              <Link to="/about">
                <li className="nav-item">About</li>
              </Link>
              <li className="nav-item"> |</li>
              <Link to="/contact">
                <li className="nav-item">Contact</li>
              </Link>
              <li className="nav-item"> |</li>
              {props.isLoggedIn ? (
                <Link to="/">
                  <li className="nav-item">Home</li>
                </Link>
              ) : (
                <Link to="/register">
                  <li className="nav-item">Register</li>
                </Link>
              )}
              <li className="nav-item"> |</li>
              {props.isLoggedIn ? (
                <Link to="/updateProfile">
                  <li className="nav-item">
                    <img
                      className="nav-profile-pic"
                      src={props.profile_pic || "https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fprofile%20placeholder.png?v=1592859805428"}
                      alt="profile"
                    />
                  </li>
                </Link>
              ) : (
                <Link to="/signIn">
                  <li className="nav-item">Sign In</li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
}

const mapToStateProps = (reduxState) => reduxState;

export default connect(mapToStateProps)(Nav);
