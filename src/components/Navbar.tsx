import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper blue lighten-2 px1 ">
      <a href="/" className="brand-logo">
        React Todo
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Todo List </NavLink>
        </li>
        <li>
          <NavLink to="/about">About as</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
