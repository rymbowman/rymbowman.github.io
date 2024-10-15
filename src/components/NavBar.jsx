import React from "react";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <div id="navbar">
      <NavBarItem
        link={"/"}
        navItem={"nav-home"}
        iconImage={"bx bx-home-alt-2"}
        tooltip={"Home"}
      />
      <NavBarItem
        link={"/resume"}
        navItem={"nav-resume"}
        iconImage={"bx bx-file"}
        tooltip={"Resume"}
      />
      <NavBarItem
        link={"/connect"}
        navItem={"nav-connect"}
        iconImage={"bx bx-conversation"}
        tooltip={"Connect"}
      />
    </div>
  );
};

export default NavBar;
