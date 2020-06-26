import React from "react";
import "./AboutCarousel.css";

function About() {
  return (
    <div className="c-about-container">
      <div className="c-about-content">
        <p className="c-about-title">About</p>
        <p className="c-about-paragraph-content">
          {" "}
          With the rise of social media dating applications, and new ways for
          people to find that perfect someone to date, life seemed complete.
          However, relationships take work. While these apps help you find that
          someone, how can they help keep that someone? That's where HeartTaken
          comes into play <br /> <br/>
        Learn more by clicking the button below
        </p>
        <button className="c-learn-more-btn">Learn More</button>
      </div>
    </div>
  );
}

export default About;