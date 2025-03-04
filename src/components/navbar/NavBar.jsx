import React from "react";
import NavBarItem from "./NavBarItem";
import "../navbar/NavBar.css";

const NavBar = () => {
  return (
    <div id="navbar">
      <NavBarItem link={"/"} iconImage={"bx bx-home-alt-2"} tooltip={"Home"} />
      <NavBarItem
        link={"https://rymbowman.github.io/Resume/ "}
        target="_blank"
        iconImage={"bx bx-file"}
        tooltip={"Resume"}
      />
      <NavBarItem
        link={"/connect"}
        iconImage={"bx bx-conversation"}
        tooltip={"Connect"}
      />
    </div>
  );
};

export default NavBar;
