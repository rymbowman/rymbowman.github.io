import React from "react";
import HeaderGreeting from "../components/HeaderGreeting";
import About from "../components/About";
import SlideshowImages from "../components/SlideshowImages";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
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
      <Contacts />
    </div>
  );
};

export default Homepage;
