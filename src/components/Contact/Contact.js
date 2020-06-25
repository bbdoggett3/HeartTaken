import React from "react";
import Nav from "../Nav/Nav";
import "./Contact.css";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <div className="contact-container">
      <Nav />
      <div className="contact-content">
        <p className="contact-title">Get In Touch</p>
        <p className="contact-paragraph">
          We are always looking for ways to improve our user experience. If you
          have any additional feedback or suggestions on how we can make this
          application any better, please feel free to let us know.
        </p>
        <form className="contact-form-container">
          <input className="message-field" 
                 placeholder="Message"
                 name="message"
                 type="text"
                 />
          <div>
            <input className="email-field" 
                   placeholder="Email Address"
                   name="email"
                   type="email"
                   />
            <input className="name-field" 
                   placeholder="Full Name"
                   name="fullname" 
                   type="text"
                   />
            <button className="contact-send-btn">Send</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
