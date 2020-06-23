import React from "react";
import Nav from "../Nav/Nav";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <Nav />
      <div className="about-content">
        <p className="about-title">About</p>
        <img
          className="about-main-pic"
          src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FHeart%20Taken%20logo.png?v=1592502714640"
          alt="Heart Taken logo"
        />
        <p className="about-paragraph-content">
          {" "}
          With the rise of social media dating applications, and new ways for
          people to find that perfect someone to date, life seemed complete.
          However, relationships take work. While these apps help you find that
          someone, how can they help keep that someone? That's where HeartTaken
          comes into play <br />
          HeartTaken was founded in the summer of 2020. It started out as a
          project for fun, and turned into much more than that. With dedicated
          time and attention our team has uncovered a range of goals that will
          help you build a stronger relationship. These goals are based around 5
          core love languages they include the following: words of affirmation,
          gifts, quality time, acts of service, and touch. <br />
          We guarantee if you take the time each day to do something special for
          the one you love, you will say with confidence your "Heart is Taken."
        </p>
      </div>
    </div>
  );
}

export default About;
