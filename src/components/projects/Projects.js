import React from "react";
import "./Projects.css";

function Projects(props) {
  return (
    <div id="Projects">
      <div className="project">
        <h1>BLACK PEPPER TECHNOLOGIES (Website and Admin Panel)</h1>
        <p>
          <i>
            Black Pepper Technologies is a full fledged silicon and system
            player providing differentiated product engineering capabilities for
            global semiconductor & system companies. Black Pepper offers
            comprehensive turnkey solutions across Consumer Electronics,
            Automotive, Medical, Industrial Automation, Defence, Wireless and
            the Internet of Things.
          </i>
        </p>
        <p>
          I am responsible for developing the architectural and functional flow
          using React.js for tracking of ideas associated with user involved in
          browser compatibility. Used React JS for creating reusable UI
          components (multi-field form elements, buttons).
        </p>
        <h3>
          Website Link:{" "}
          <a href="https://www.blackpeppertech.com/">Blackpeppertech.com</a>
        </h3>
      </div>

      <div className="project">
        <h1>KOBSTER</h1>
        <p>
          <i>
            Kobster is an Ecommerce application which provides Office Supplies,
            Hospital & Lab Supplies, Electronics, stationary etc..
          </i>
        </p>
        <p>
          I am responsible for developing the application using React.js
          following the architecture which is properly portioning the
          directives, services and controllers. Used Redux for state management.
          Developed the backed interface to manage products, brands and orders
          using Node.js. Enhanced existing features without affecting other
          modules. Used MongodB for the database
        </p>
        <h3>
          Website Link: <a href="https://www.kobzo.com/">Kobzo.com</a>
        </h3>
      </div>

      <div className="project">
        <h1>WICULTY LEARNING SOLUCTIONS PVT. LTD</h1>
        <p>
          <i>
            Wiculty.com is a global E-Learning Platform providing software
            professional certification courses.
          </i>
        </p>
        <p>
          I am responsible for Enhancing the components and creating styled
          components for multiple usage of components using React.js and
          managing the state using Redux
        </p>
        <h3>
          Website Link: <a href="https://www.wiculty.com/">Wiculty.com</a>
        </h3>
      </div>
    </div>
  );
}

export default Projects;
