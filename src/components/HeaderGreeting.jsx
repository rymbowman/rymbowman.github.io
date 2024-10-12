import React from "react";
import "../App.css";
const HeaderGreeting = () => {
  return (
    <div id="header-intro">
      <p className="header-title" id="greeting">
        Hello, my name is
      </p>
      <h1 className="header-title" id="name">
        Ryan Bowman.
      </h1>
    </div>
  );
};

export default HeaderGreeting;
