import React from "react";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <div id="navbar">
      <NavBarItem
        navItem={"nav-resume"}
        iconImage={"bx bx-file"}
        tooltip={"Resume"}
      />
      <NavBarItem
        navItem={"nav-connect"}
        iconImage={"bx bx-conversation"}
        tooltip={"Connect"}
      />
    </div>
  );
};

export default NavBar;
