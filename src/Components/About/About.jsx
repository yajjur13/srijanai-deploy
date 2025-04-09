import React from "react";
import "./About.css";
import about_img from "../../assets/AboutUsimage.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>ABOUT SRIJAN AI</h3>
        <h2>Innovate. Automate. Elevate.</h2>
        <p>
          At Srijan AI, we specialize in building web applications, mobile apps,
          and AI-powered WhatsApp chatbots that transform the way businesses
          operate. Our innovative solutions automate processes, enhance user
          engagement, and drive efficiency—helping you stay ahead in the digital
          era. Let’s create the future, together.
        </p>
      </div>
    </div>
  );
};

export default About;
