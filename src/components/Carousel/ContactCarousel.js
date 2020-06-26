import React from "react";
import "./ContactCarousel.css";

function Contact() {
  return (
    <div className="c-contact-container">
      <div className="c-contact-content">
        <p className="c-contact-title">Get In Touch</p>
        <p className="c-contact-paragraph">
          We are always looking for ways to improve our user experience. If you
          have any additional feedback or suggestions on how we can make this
          application any better, please feel free to let us know. <br/>
          Click the button below to send feedback of our site.
        </p>
        <button className="c-feedback-btn">Click Here</button>

      </div>
    </div>
  );
}

export default Contact;