import React from "react";
import "./App.css";
import HeaderGreeting from "./components/HeaderGreeting";
import About from "./components/About";
import SlideshowImages from "./components/SlideshowImages";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HeaderBio from "./components/HeaderBio";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="main-content">
      <NavBar />
      <HeaderGreeting />
      <HeaderBio />
      <div id="about-section-intro">
        <p>
          Thanks for visiting! Trust is key to any relationship, so here is a
          bit about me...
        </p>
      </div>
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
