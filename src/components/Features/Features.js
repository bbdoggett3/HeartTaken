import React from "react";
import Nav from "../Nav/Nav";
import "./Features.css";
import Footer from "../Footer/Footer";

function Features() {
  return (
    <div className="features-container">
      <Nav />
      <div className="features-content">
        <p className="features-title">Main Features/Benefits</p>
        <p className="features-paragraph-content">
          Finally, a site that focuses on the tender relationships you care
          about most. With our ability to help individuals set strategic goals,
          specifically designed to foget ones self and we promise you will see
          magnificent results. You will be able to say with confidence my "Heart
          is Taken."
        </p>
        <div className="features-main-box">
          <div className="features-indivdual-row">
            <img className="features-heart-img" src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fheart.svg?v=1592943440103" alt="heart" />
            <div className="features-individual-text">
              <h3>Daily Love Goals</h3>
              <p>Log in daily and select a love language you personally would love to work on for the day. </p>
            </div>
          </div>
          <div className="features-indivdual-row">
            <img className="features-heart-img" src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fheart.svg?v=1592943440103" alt="heart" />
            <div className="features-individual-text">
              <h3>Profile Tracking</h3>
              <p>Check your current daily goal, along with goals previoulsy accomplished with our Wheel graph.</p>
            </div>
          </div>
          <div className="features-indivdual-row">
            <img className="features-heart-img" src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fheart.svg?v=1592943440103" alt="heart" />
            <div className="features-individual-text">
              <h3>Feedback Options</h3>
              <p>We are constantly trying to improve our site send any type of feedback with our "Contact" button.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Features;
