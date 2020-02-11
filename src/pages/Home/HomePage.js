import React from "react";
import c_sharp from "../../images/C_Sharp_logo.png";
import nodejs from "../../images/nodejs.svg";
import ruby from "../../images/ruby.svg";
import javascript from "../../images/javascript.svg";
import Gallery from "../../components/Gallery.js";
import pic from "../../images/professionalpicture.jpeg";
import logo from "../../images/fisayoweblogo.png";
import "./home.css";

export default function HomePage() {
  return (
    <div>
      <div className="heading">
        <img className="logo" src={logo} width="150" />
        <p className="mylogoname">FISAYO FAGADE</p>
      </div>
      <a
        href="https://www.linkedin.com/in/fisayofagade"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={pic} className="background-image" alt="professionalpicture" />
      </a>
      <div className="pictureDescription">
        Fisayo Fagade <ul>Full Stack Developer based in West London</ul>
        <Gallery />
        <div className="About-Me">
          <div className="Inner-Wrapper">
            <h2>MY TECH STACK</h2>
          </div>
        </div>
        {/* <img align="middle" /> */}
        <div className="techStack-container">
          <div className="techStack-item">
            <img src={javascript} alt="javaScript.svg" />
          </div>
          <div className="techStack-item">
            <img src={nodejs} alt="nodejs.svg" className="techStack-item" />
          </div>
          <div className="techStack-item">
            <img src={ruby} alt="ruby.svg" />
          </div>
          <div className="techStack-item">
            <img src={c_sharp} alt="C_Sharp_logo.png" />
          </div>
          <div className="techStack-item">
            <i className="fab fa-react react-logo"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
