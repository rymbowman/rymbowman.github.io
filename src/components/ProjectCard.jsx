import React from "react";
import PropTypes from "prop-types";
const ProjectCard = ({ link, title }) => {
  return (
    <>
      <a href={link} className="card-pathways" id="dynasty">
        <div>
          <h3 className="card-heading">{title}</h3>
        </div>
      </a>
    </>
  );
};
ProjectCard.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};
export default ProjectCard;
