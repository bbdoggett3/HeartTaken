import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <hr className="footer-break" />
      <div className="footer-container">
        <p className="copyright-info">Follow us on</p>
        <div className="social-media-icon-row">
          <a href="http://facebook.com">
            <img
              className="social-icon"
              src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Ffacebook.png?v=1548445188791"
              alt="Facebook-logo"
            />
          </a>
          <a href="http://twitter.com">
            <img
              className="social-icon"
              src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2FTwitter.png?v=1548445203937"
              alt="Twitter-logo"
            />
          </a>
          <a href="https://instagram.com">
            <img
              className="social-icon"
              src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Finstagram-png-instagram-png-logo-1455.png?v=1593050365479"
              alt="Instagram-logo"
            />
          </a>
        </div>
        <hr className="line-bar" />
        <footer className="copyright-info">
          1717 Harrison St. Rexburg ID, 83440, USA <br />
          &#169;HeartTaken LLC 2020
        </footer>
      </div>
    </div>
  );
}

export default Footer;
