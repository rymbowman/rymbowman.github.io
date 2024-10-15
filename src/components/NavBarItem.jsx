import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NavBarItem = ({ navItem, link, iconImage, tooltip }) => {
  return (
    <div className="nav-item">
      <Link to={link} id={navItem}>
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
};
export default NavBarItem;
