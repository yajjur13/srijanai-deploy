import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Title from "./Components/Title/Title";
import Program from "./Components/Program/Program";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

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
