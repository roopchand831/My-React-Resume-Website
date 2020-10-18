import React from "react";
import "./Content.css";

function Content(props) {
  return (
    <div className="Home">
      <section id="Container">
        <div className="content">
          <h1>
            I AM <br />
            ROOPCHAND CHOWDARY
          </h1>

          <p>
            I am Full Stack Web Developer worked on web applications using
            React.js as a frontend library and Node.js for backend
            implementation. I Love to work as web developer and like to learn
            new Technologies.
          </p>
        </div>
      </section>
      <h1 className="heading">EXPERIENCE</h1>
      <section id="experience">
        <div className="exp-container">
          <h1>Greet Labs Pvt. Ltd.</h1>
          <h2>Role:Full Stack Web Developer</h2>

          <div className="duration">
            <img src="https://img.icons8.com/plasticine/100/000000/planner.png" />
            <p>1st March to Present</p>
          </div>
          <p>
            Here I am currently working as a Full Stack web developer (MERN)
            using React.js front end Library for front end, Redux for managing
            state, node.js along with express.js backend web development
            framework for backend and Monogdb for the database and sometimes I
            worked with Postgresql.
          </p>
        </div>
      </section>
      <h1 className="heading">SKILLS</h1>
      <section id="skills">
        <div className="skill">
          <h2>Web Frameworks</h2>
          <p>HTML5, CSS3</p>
        </div>
        <div className="skill">
          <h2>Scripts(client-side)</h2>
          <p>JavaScript, jQuery, React.js, Redux</p>
        </div>
        <div className="skill">
          <h2>Scripts(server-side)</h2>
          <p>Node.js, Express.js for RESTful API</p>
        </div>
        <div className="skill">
          <h2>Database and ORM</h2>
          <p>Monogdb, firebase, postgresql</p>
        </div>
      </section>{" "}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Content;
