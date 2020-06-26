import React from "react";
import "./FeatCarousel.css";
import {Link} from 'react-router-dom';


function Features() {
  return (
    <div className="c-features-container">
      <div className="c-features-content">
        <p className="c-features-title">Main Features/Benefits</p>
        <p className="c-features-paragraph-content">
          Finally, a site that focuses on the tender relationships you care
          about most. With our ability to help individuals set strategic goals,
          specifically designed to foget ones self and we promise you will see
          magnificent results. You will be able to say with confidence my "Heart
          is Taken."
        </p>
        <div className="c-features-main-box">
          <div className="c-features-indivdual-row">
            <img className="c-features-heart-img" src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fheart.svg?v=1592943440103" alt="heart" />
            <div className="c-features-individual-text">
              <h3>Daily Love Goals</h3>
            </div>
          </div>
          <div className="c-features-indivdual-row">
            <img className="c-features-heart-img" src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fheart.svg?v=1592943440103" alt="heart" />
            <div className="c-features-individual-text">
              <h3>Profile Tracking</h3>
             <Link to="/features"><button className="c-features-btn">Learn More</button></Link>
            </div>
          </div>
          <div className="c-features-indivdual-row">
            <img className="c-features-heart-img" src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fheart.svg?v=1592943440103" alt="heart" />
            <div className="c-features-individual-text">
              <h3>Feedback Options</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;