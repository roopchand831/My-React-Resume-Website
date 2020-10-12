import React from "react";
import "./Content.css";

function Content(props) {
  return (
    <section id="hero">
      <div className="hero container">
        <div>
          <h1>
            Hello, <span></span>
          </h1>
          <h1>
            My Name is <span></span>
          </h1>
          <h1>
            Arfan <span></span>
          </h1>
          <a href="#projects" type="button" class="cta">
            Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

export default Content;
