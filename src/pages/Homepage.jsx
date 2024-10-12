import React from "react";
import HeaderGreeting from "../components/HeaderGreeting";
import About from "../components/About";
import SlideshowImages from "../components/SlideshowImages";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import HeaderBio from "../components/HeaderBio";
import AboutIntro from "../components/AboutIntro";
import "../App.css";
const Homepage = () => {
  return (
    <div className="main-content">
      <HeaderGreeting />
      <HeaderBio />
      <AboutIntro />
      <div id="about-container">
        <About />
        <SlideshowImages />
      </div>

      <Projects />
      <Contact />
    </div>
  );
};

export default Homepage;
