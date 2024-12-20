import React from "react";
import "../projects/Projects.css";
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
        <ProjectCard
          id={"dynasty"}
          link={""}
          title={"Fantasy Football Website (React)"}
        />
        <ProjectCard
          id={"etch-a-sketch"}
          link={""}
          title={"Etch-A-Sketch (Javascript)"}
        />
        <ProjectCard
          id={"rock-paper-scissors"}
          link={""}
          title={"Rock-Paper-Scissors (Javascript)"}
        />
      </div>
    </>
  );
};

export default Projects;
