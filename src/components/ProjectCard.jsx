import React from "react";
import PropTypes from "prop-types";
const ProjectCard = ({ id, link, title }) => {
  return (
    <>
      <a href={link} className="card-pathways" id={id}>
        <div>
          <h3 className="card-heading">{title}</h3>
        </div>
      </a>
    </>
  );
};
ProjectCard.propTypes = {
  id: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
};
export default ProjectCard;
