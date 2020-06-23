import React from "react";
import Nav from "../Nav/Nav";
import "./Features.css";

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
            <h3>Daily Love Goals</h3>
          </div>
          <div className="features-indivdual-row">
            <h3>Profile Tracking</h3>
          </div> 
          <div className="features-indivdual-row">
            <h3>Notification Alerts</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
