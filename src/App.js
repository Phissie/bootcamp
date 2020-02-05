import React from "react";
// import logo from "./logo.svg";

import "@fortawesome/fontawesome-free/css/all.min.css";
import githublogo from "./";
import c_sharp from "./C_Sharp_logo.png";
import nodejs from "./nodejs.svg";
import ruby from "./ruby.svg";
import reactLogo from "./React.png";
import javascript from "./javascript.svg";
import Gallery from "./components/Gallery.js";

import pic from "./professionalpicture.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="heading">
        <p>Hello World I'm Fisayo! Welcome to my page</p>
      </div>{" "}
      <a href="https://www.linkedin.com/in/fisayofagade" target="_blank">
        <img src={pic} className="background-image"></img>
      </a>
      <div className="pictureDescription">
        Fisayo Fagade <li>Full Stack Developer</li>
        <Gallery />

        <div className="logo">
        <img
          src={javascript}
          alt="javaScript.svg"
          width="120"
          height="120"
          alt=""
        />
        <img align="middle" />
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
        <div className="About-Me">
          
            <div className="Inner-Wrapper">
            <h2>ABOUT ME</h2>

            <p className="About-Me-Text">
              I’m a Full-Stack Developer based in West London. I am passionate
              about functional programming, learning new languages and improving
              my proficiency.
            <br />
            My passion for technology led me to launch my tech career in 2017
            working very long hours for a start-up in Stratford-upon-Avon, UK in
            a Business Development role. Daily, I convinced clients that our
            software will solve issues they had often given up on. I decided to
            learn to code after my long suffering developer colleagues got fed
            up with me asking them non stop questions about how our software had
            all it’s functionality. I started learning to Ruby in my free time
            in Winter 2018 after completing a five week course with Google
            Digital garage that introduced me to Javascript and CSS. In January
            2020, I became a full time developer learning Full Stack web
            development, ReatcJS, Javascript and CSS. When I am not working on
            my personal projects, I can be found around London attending tech
            Meetup groups and conferences; Ruby Hacknight London, ReactJs Girls,
            CodeBar London, IBM Code London. Code Mesh</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
