import React from "react";
import "./Contact.css";
import ContactImage from "../../assets/contact.jpg";
import GithubLogo from "../../assets/github-logo.png";

function Contact(props) {
  return (
    <div id="Contact">
      <div className="details">
        <h1>N ROOPCHAND CHOWDARY</h1>
        <h3>Full Stack Web Developer</h3>
        <img src={ContactImage} alt="Contact" />
        <p>
          Full-stack Web Developer able to listen and insert the ideas of a
          client or collaborator, and build a sophisticated website for user
          experience. Constantly seeking to grow my network. Determined to
          complete and present the best possible product for the user,
          researching and understanding API documentation, reading and using
          different Frameworks
        </p>
      </div>
      <div className="contact-info">
        <h1>CONTACT</h1>
        <div className="address">
          <img src="https://img.icons8.com/plasticine/100/000000/worldwide-location.png" alt="address" />
          <p>
            Flat A-102, Golden nest apartments, JCR Layout, panathur,
            kadubeesanahalli,Bangalore-560087
          </p>
        </div>
        <div className="email">
          <img src="https://img.icons8.com/dusk/100/000000/email.png" alt="email" />
          <p>roopchand831@gmail.com</p>
        </div>
        <div className="phone">
          <img src="https://img.icons8.com/cute-clipart/64/000000/cell-phone.png" alt="phone" />
          <p>+91 7406454995</p>
        </div>

        <div className="github">
          <img src={GithubLogo} alt="Github" />
          <a href="https://github.com/roopchand831/">
            https://github.com/roopchand831/
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
