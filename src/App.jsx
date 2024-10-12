import React from "react";
import "./App.css";
import HeaderGreeting from "./components/HeaderGreeting";
import About from "./components/About";
import SlideshowImages from "./components/SlideshowImages";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HeaderBio from "./components/HeaderBio";
import NavBar from "./components/NavBar";
import AboutIntro from "./components/AboutIntro";

function App() {
  return (
    <div className="main-content">
      <NavBar />
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
}

export default App;
