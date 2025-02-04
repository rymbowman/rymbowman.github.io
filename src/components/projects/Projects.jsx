import React from "react";
import "../projects/Projects.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  const projects = [
    {
      id: "fantasy-football",
      link: "https://fantasy-football-website.onrender.com",
      githubLink: "https://github.com/rymbowman/Fantasy-Football-Website",
      title: "Fantasy Football Website (React)",
    },
    {
      id: "blog-website",
      link: "",
      githubLink: "",
      title: "Blog Website (React, Node.js, PostgreSQL)",
    },
    {
      id: "rock-paper-scissors",
      link: "",
      githubLink: "",
      title: "Rock-Paper-Scissors (JS)",
    },
    {
      id: "todo-app",
      link: "",
      githubLink: "",
      title: "To-do Application (React)",
    },
  ];

  return (
    <div className="projects-container" data-aos="fade-in">
      <h2 id="projects-title" data-aos="fade-in">
        Projects
      </h2>
      <div className="projects-tileContainer" data-aos="fade-in">
        {projects.map((project) => (
          <div key={project.id} className="project-tile">
            <h3 className="project-title">{project.title}</h3>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Live Site
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
