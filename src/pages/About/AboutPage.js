import React from "react";
import bird from "../../images/completed-bird-eating.gif";
import weblogo from "../../images/fisayoweblogo.png";
import pic from "../../images/professionalpicture.jpeg";
import "./about.css";

export default function AboutPage() {
  return (
    <div className="logo" src={weblogo} width="150">
      <div className="aboutpagepic">
        <img src={pic} className="background-image" alt="professionalpicture" />
        
        <div className="mystorytext">
          <p>I’m a Full-Stack Developer based in West London. I am passionate about
          functional programming, learning new languages and improving my
          proficiency. My passion for technology led me to launch my tech career
          in 2017 working long hours for a start-up in Stratford-upon-Avon, UK.
          </p>

          
          I decided to learn to code after my
          long-suffering developer colleagues encouraged me to learn. 95% of my
          conversations with them asked how they had built
          the beautiful software I was selling. I often asked them if they could build the
        functionality my prospective clients were asking for. I started learning to code
          at a part-time five week course with Google Digital
          Garage that introduced me to programming concepts and the range of software engineering careers. 
          <p>In January 2020, I became a
          full-time developer learning Full Stack web development, ReactJS,
          JavaScript and CSS. When I am not working on my personal projects, I
          can be found around London doing Yoga, attending tech Meetup groups
          and conferences like Ruby Hack Night London, Code Bar London, IBM Code
          London and tech conferences like Code Mesh.
          </p>
        </div>
      </div>
    </div>
  );
}
