import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./Contact.css";
import Footer from "../Footer/Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

toast.configure();
const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <div className="contact-container">
        <Nav />
        <div className="contact-content">
          <p className="contact-title">Get In Touch</p>
          <p className="contact-paragraph">
            We are always looking for ways to improve our user experience. If
            you have any additional feedback or suggestions on how we can make
            this application any better, please feel free to let us know.
          </p>
          <form className="contact-form-container">
            <input
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              className="message-field"
              placeholder="Message"
              value={message}
              //  type="text"
            />
            <div>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className="email-field"
                placeholder="Email Address"
                value={email}
                //  type="email"
              />
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                className="name-field"
                placeholder="Full Name"
                value={name}
                type="text"
              />
              <button
                variant="Success"
                onClick={() => {
                  axios.post("/api/mail", { name, email, message });
                  toast.info("Thank-you! Feedback was sent", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                  setEmail("");
                  setName("");
                  setMessage("");
                }}
                className="contact-send-btn"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
      <ToastContainer autoClose={6000} />
    </div>
  );
};

export default Contact;
