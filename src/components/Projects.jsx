import React from "react";
import "../App.css";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <>
      <h2 id="projects-title" data-aos="fade-in">
        Projects
      </h2>
      <div id="projects" data-aos="fade-in">
        <ProjectCard link={""} title={"Fantasy Football Website (React)"} />
        <ProjectCard link={""} title={"Etch-A-Sketch (Javascript)"} />
        <ProjectCard link={""} title={"Rock-Paper-Scissors (Javascript)"} />
      </div>
    </>
  );
};

export default Projects;
