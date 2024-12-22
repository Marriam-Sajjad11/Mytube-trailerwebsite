import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="movie-types">
        <NavLink to="/" className="movie-type" activeClassName="active">
          All
        </NavLink>
        <NavLink to="/comedy" className="movie-type" activeClassName="active">
          Comedy
        </NavLink>
        <NavLink to="/punjabi" className="movie-type" activeClassName="active">
          Punjabi
        </NavLink>
        <NavLink to="/horror" className="movie-type" activeClassName="active">
          Horror
        </NavLink>
        <NavLink to="/action" className="movie-type" activeClassName="active">
          Action
        </NavLink>
        <NavLink
          to="/hollywood"
          className="movie-type"
          activeClassName="active"
        >
          Hollywood
        </NavLink>
        <NavLink
          to="/lollywood"
          className="movie-type"
          activeClassName="active"
        >
          Lollywood
        </NavLink>
        <NavLink
          to="/bollywood"
          className="movie-type"
          activeClassName="active"
        >
          Bollywood
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
