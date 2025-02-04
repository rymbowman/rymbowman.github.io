import React from "react";
import HeaderGreeting from "../../components/header/HeaderGreeting";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Contacts from "../../components/contacts/Contacts";
import HeaderBio from "../../components/header/HeaderBio";
import AboutIntro from "../../components/about/AboutIntro";
import "../homepage/Homepage.css";
const Homepage = () => {
  return (
    <div className="main-content">
      <HeaderGreeting />
      <HeaderBio />
      <AboutIntro />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
};

export default Homepage;
