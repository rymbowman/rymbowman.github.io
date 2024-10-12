import React from "react";
import "../App.css";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <>
      <h2 id="projects-title">Projects</h2>
      <div id="projects">
        <ProjectCard link={""} title={"Fantasy Football Website"} />
        <ProjectCard link={""} title={"Etch-A-Sketch"} />
        <ProjectCard link={""} title={"Rock-Paper-Scissors"} />
      </div>
    </>
  );
};

export default Projects;
