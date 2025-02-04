import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import { useEffect } from "react";
import AboutContent from "./AboutContent";
import SlideshowImages from "./SlideshowImages";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <div className="about-container">
      <AboutContent />
      <SlideshowImages />
    </div>
  );
};

export default About;
