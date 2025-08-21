import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Title from "./Components/Title/title.jsx";
import Program from "./Components/Program/Program.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="What We Offer" />
        <Program />
        <Title subTitle="" title="About Us" />
        <About />
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact />
      </div>
    </div>
  );
};

export default App;
