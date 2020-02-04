import React from "react";
import logo from "./logo.svg";
import c_sharp from "./C_Sharp_logo.png";
import nodejs from "./nodejs.svg";
import ruby from "./ruby.svg";
import react from "./React.png";
import javascript from "./javascript.svg";
import html from "./html.svg";
import "./App.css";
import bird from "./ezgif.com-resize.gif";
import portfoilio from "./portfoilio.jpg";

function App() {
  return (
    <div>
      <div className="App">
        <div className="heading">
          <h2>Hello World! I'm a Full-Stack Developer based in London</h2>
        </div>
        <img src={portfoilio} className="background-image"></img>
        <img src={bird} alt="bird" align="middle" className="bird" />
        <div className="overlay"></div>
      </div>
      <div className="logo">
        <img src={javascript} alt="javaScript.svg" width="120" height="120" />
        <img align="middle" />
        <div classname="overlay"></div>
        <img
          src={html}
          alt="html.svg"
          width="120"
          height="120"
          img
          align="middle"
        />
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
      </div>
      <p className="About-Me">
        <h2> I’m a Full-Stack Developer based in West London. I am passionate about
        functional programming, learning new languages and improving my
        proficiency. My passion for technology led me to launch my tech career
        in 2017 working very long hours for a start-up in Stratford-upon-Avon,
        UK in a Business Development role. Daily, I convinced clients that our
        software will solve issues they had often given up on. I decided to
        learn to code after my long suffering developer colleagues got fed up
        with me asking them non stop questions about how our software had all
        it’s functionality. I started learning to Ruby in my free time in Winter
        2018 after completing a five week course with Google Digital garage that
        introduced me to Javascript and CSS. In January 2020, I became a full
        time developer learning Full Stack web development, ReatcJS, Javascript
        and CSS. When I am not working on my personal projects, I can be found
        around London attending tech Meetup groups and conferences; Ruby
        Hacknight London, ReactJs Girls, CodeBar London, IBM Code London. Code
        Mesh</h2>
      </p>
    </div>
  );
}

export default App;
