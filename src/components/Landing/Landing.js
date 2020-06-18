import React from "react";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Landing.css";
// import SignIn from '../SignIn/SignIn';
// import Register from '../Register/Register';
// import Profile from '../Profile/Profile';
// import Features from '../Features/Features';
// import About from '../About/About';
// import Contact from '../Contact/Contact';

function Landing() {
  return (
    <div className="landing-container">
      <Nav />
      <div className= "landing-content">
        <p className="page-title-content">DATE, LOVE, REPEAT...</p>
        <p className="paragraph-content">
          Evidence shows that married couples who devote time together at least
          once a week not only have lower divorce rates, but also increase the
          preceived quality of their marriage. That is enough evidenceto start
          dating your spouse more! We can help here at HeartTaken
        </p>
        <hr className="line-bar"/>
        <Link to="/signIn">
          <button className="sign-in-btn">Sign In</button>
        </Link>
        <p>
          Don't already have an account?{" "}
          <Link to="/register"><span className="register-btn-landing">Register Here</span></Link>
        </p>
      </div>
    </div>
  );
}

export default Landing;
