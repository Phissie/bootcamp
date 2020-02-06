import React from "react";
import c_sharp from "../../images/C_Sharp_logo.png";
import nodejs from "../../images/nodejs.svg";
import ruby from "../../images/ruby.svg";
// import reactLogo from "../images/React.png";
import javascript from "../../images/javascript.svg";
import Gallery from "../../components/Gallery.js";
import pic from "../../images/professionalpicture.jpeg";
// import "./Home"/home.css";
import logo from "../../images/fisayofagadelogo.png";

export default function HomePage() {
  return (
    <div>
      <div className="heading">
        <img className="logo" src={logo} width="150" />
        <p>Hello World I'm Fisayo! Welcome to my page</p>
      </div>{" "}
      <a
        href="https://www.linkedin.com/in/fisayofagade"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={pic} className="background-image" alt="professionalpicture" />
      </a>
      <div className="pictureDescription">
        Fisayo Fagade <li>Full Stack Developer</li>
        <Gallery />
        <div className="About-Me">
          <div className="Inner-Wrapper">
            <h2>MY TECH STACK</h2>
          </div>
        </div>
        <div className="logo">
          <img src={javascript} alt="javaScript.svg" width="120" height="120" />
          {/* <img align="middle" /> */}
          <div classname="overlay"></div>

          <div classname="overlay"></div>
          <img
            src={nodejs}
            alt="nodejs.svg"
            width="120"
            height="120"
            align="middle"
          />
          <div classname="overlay"></div>
          <img
            src={ruby}
            alt="ruby.svg"
            width="120"
            height="120"
            align="middle"
          />
          <div classname="overlay"></div>
          <img
            src={c_sharp}
            alt="C_Sharp_logo.png"
            width="120"
            height="120"
            align="middle"
          />

          <div className="overlay"></div>
          <div className="text"></div>
          <i class="fab fa-react react-logo"></i>
        </div>
      </div>
    </div>
  );
}
