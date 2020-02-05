import React from "react";
import linkedin from "../fisayolinkedinlogo.svg";
import githublogo from "../githublogo.gif";
import Gmail from "../Gmail-512.png";
import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="ContactMe">
      <a href="https://www.linkedin.com/in/fisayofagade">
        <img src={linkedin} alt="logo" />
      </a>

      <a href="https://github.com/Phissie">
        <img src={githublogo} alt="githublogo.gif" />
      </a>

      <a href="mailto:phisayour@gmail.com">
        <img src={Gmail} />
      </a>
    </div>
  );
}
