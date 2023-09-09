import React from "react";

import "./MainNav.scss";

import logo from "../assets/logo.png";

export const MainNav = () => {
  return (
    <header>
      <nav className="main-nav">
        <a>
          <img src={logo} className="logo" />
        </a>
        <a>
          <h3>Translation Service</h3>
        </a>
        <a>
          {/* <h3>About Me</h3> */}
        </a>
      </nav>
    </header>
  );
};
