import React from "react";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className="contact-cont" id="contacts">
      <Fade top>
        <div className="section-intro">
          <h1>CONTACT ME!</h1>
        </div>
      </Fade>
      <Fade bottom>
      <div className="contact">
        <a
          href="mailto:datagirlcmr@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fa fa-envelope    "></i>
        </a>

        <a
          href="https://www.linkedin.com/in/selmandi/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fa fa-linkedin    "></i>
        </a>

        <a
          href="https://twitter.com/SelmaNdi"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fa fa-twitter    "></i>
        </a>

        <a
          href="https://github.com/Datagirlcmr"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fa fa-github"></i>
        </a>

        <a
          href="https://www.instagram.com/selma_ndi"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fa fa-instagram    "></i>
        </a>
      </div>
      </Fade>
      <div className="footer">
        <p>Made with 💖 by Selma Ndi © 2020</p>
      </div>
    </div>
  );
};

export default Contact;