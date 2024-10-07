import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import SlideshowImages from "./components/SlideshowImages";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="main-content">
      <Header />

      <div id="about-section-intro">
        <p>
          Thanks for visiting! Trust is key to any relationship, so here's a bit
          about me...
        </p>
      </div>
      <About />
      <SlideshowImages />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
