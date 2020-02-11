import React from "react";
import linkedin from "../images/fisayolinkedinlogo.svg";
import githublogo from "../images/githublogo.gif";
import Gmail from "../images/Gmail-512.png";
import "./Gallery.css";
import logo from "../images/fisayoweblogo.png";

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
        <img src={Gmail} alt="gmail" />
      </a>
    </div>
  );
}
