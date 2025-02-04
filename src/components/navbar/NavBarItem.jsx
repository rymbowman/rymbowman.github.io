import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../navbar/NavBar.css";

const NavBarItem = ({ link, iconImage, tooltip, target = "_self" }) => {
  return (
    <div className="nav-item">
      <Link
        to={link}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : "undefined"}
      >
        <i className={iconImage}></i>
        <p className="nav-tooltip" onClick={(e) => e.preventDefault()}>
          {tooltip}
        </p>
      </Link>
    </div>
  );
};
NavBarItem.propTypes = {
  navItem: PropTypes.string,
  link: PropTypes.string,
  iconImage: PropTypes.string,
  tooltip: PropTypes.string,
  target: PropTypes.string,
};
export default NavBarItem;
