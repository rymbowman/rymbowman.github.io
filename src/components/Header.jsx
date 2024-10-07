import React from "react";
const Header = () => {
  return (
    <>
      <div id="header-intro">
        <p className="header-title" id="greeting">
          Hello, my name is
        </p>
        <h1 className="header-title" id="name">
          Ryan Bowman.
        </h1>
      </div>
      <div id="header-bio">
        <p id="career-field">Web Developer</p>
        <p id="bio">
          Committed to continuously improving my skills in the field of web
          development to design beautifully functioning websites and
          applications that solve real-world business needs.
        </p>
      </div>
    </>
  );
};

export default Header;
